from flask import Flask, render_template
from flask_socketio import SocketIO, send, emit

app = Flask(__name__)
app.config["SECRET_KEY"] = "my_secret_key"

sio = SocketIO(app, cors_allowed_origins="*")
# sio = SocketIO(app)


@sio.event
def my_event(message):
    print(message)
    emit('my_response', {
        "message": "response message from click"
    })


@app.route('/')
def main():
    context = {
        "status": True,
        "message": "message from render_template"
    }
    return render_template('index.html', data=context)
