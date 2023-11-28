from flask import Flask, render_template
from flask_socketio import SocketIO, send, emit

from datetime import datetime

app = Flask(__name__)
app.config["SECRET_KEY"] = "my_secret_key"

sio = SocketIO(app, cors_allowed_origins="*")
# sio = SocketIO(app)


@app.route('/')
def main():
    context = {
        "status": True,
        "message": "message from render_template"
    }
    return render_template('index.html', data=context)

@sio.on('my_brodcasting')
def fx_brodcasting(message):
    print(f'message brodcasting: {message}')

    emit('brodcast', {
        "message": f"Brodcasting message @{datetime.now()}"
    }, broadcast=True)


@sio.event
def my_event(message):
    print(message)
    emit('my_response', {
        "message": f"response message from click @{datetime.now()}"
    })
