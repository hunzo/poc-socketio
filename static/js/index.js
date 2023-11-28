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

form = document.getElementById("my-form")
form.addEventListener("submit", (e) => {
  e.preventDefault()

  sio.emit("my_event", {
    "data": e.target[0].value,
  })

  e.target[0].value = ""
})

bcform = document.getElementById("my-brodcast")
bcform.addEventListener("submit", (e) => {
  e.preventDefault()

  // console.log(e.target[0].value)

  sio.emit("my_brodcasting", {
    "data": e.target[0].value,
  })

  e.target[0].value = ""
})
