import { writable } from "svelte/store";
import io from "socket.io-client"

export let socketStores = {
    example: writable('')
}
const socketHolder = io("/")
socketHolder.on("example", data => {
    socketStores.example.set(data)
})
export let socket = writable(socketHolder)
export let props = writable({ test: "hi" })