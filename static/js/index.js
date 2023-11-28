const sio = io()

sio.on("connect", () => {
  console.log("socketio on connected")
})

sio.on("disconnect", () => {
  console.log("disconnected")
})

sio.on("brodcast", (message) => {
  msg = document.getElementById("brodcast-message")
  msg.innerText = message.message
})

sio.on("my_response", (message) => {
  msg = document.getElementById("my_response-message")
  msg.innerText = message.message
})

const push_brodcasting = () => {
  console.log("push brodcasting")
  sio.emit("my_brodcasting", {
    "data": "push_brodcasting from frontend",
  })
}

const push_event = () => {
  console.log("push event")
  sio.emit("my_event", {
    "data": "push_event from frontend",
  })
}
