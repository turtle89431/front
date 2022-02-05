// express js
const express = require('express');
const session = require('express-session')
const app = express()
const port = 3000
const http = require('http');
const server = http.createServer(app);
const { join } = require('path');
//socket-io 
const IO = require("./socket-io")
IO(server)
// svelte bundle routes
const bundle = require("./bundle")
// app setup
app.use(express.static('public'))
const sessionSecret = "@your supper secret phrase to protect your sessions@"
app.use(session({
    resave: false, // don't save session if unmodified
    saveUninitialized: false, // don't create session until something stored
    secret: sessionSecret
}))
// add non svelte routes here

app.get('/api', (req, res) => {
    res.send('Hello World!')
})
//bind svelte to express app
app.use("/", bundle)
//bind express app to port
server.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})