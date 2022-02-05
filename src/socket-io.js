const { Server } = require("socket.io");
module.exports = (server) => {
    const io = new Server(server);
    io.on('connection', (socket) => {
        let t = 0
        console.log('a user connected');
        socket.on("hi", data => {
            console.log("inside", data)
        })
        setInterval(() => {
            socket.emit("example", "example works" + t++)
        }, 1000)

    });
    io.on("hi", data => {
        console.log("out", data)
    })
}
