class Sockets {
  constructor(io) {
    this.io = io
    this.SocketsEvents()
  }

  SocketsEvents() {
    //onconnection
    this.io.on("connection", (socket) => {
      // socket.emit("mensaje-bienvenida", {
      //   msg: "Bienvenido al server",
      //   fecha: new Date(),
      // })
      //Escuchar el evento:mensaje-to-server
      socket.on("mensaje-to-server", (data) => {
        this.io.emit("mensaje-from-server", data)
      })
      // socket.on("mensaje-cliente", (data) => {
      //   console.log("El front emitio algo: ", data)
      // })
    })
  }
}

module.exports = Sockets
