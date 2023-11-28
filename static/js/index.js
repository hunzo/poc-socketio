url = "http://localhost"

const sio = io()

sio.on('connect', () => {
  console.log('socketio on connected')
})

sio.on('disconnect', () => {
  console.log('disconnected')
})

sio.on('my_response', (message) => {
  console.log(message)
})

const push_event = () => {
  console.log('push event')
  sio.emit('my_event', {
    "data": "push_event from frontend",
  })
}
