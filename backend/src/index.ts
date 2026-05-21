import { WebSocketServer } from "ws";
import { generateRandomString } from "./lib/generatetext";
import { RoomManager } from "./RoomManager";

const PORT = parseInt(process.env.PORT || '8081', 10);
const wss = new WebSocketServer({port:PORT})
const roomManager = new RoomManager();
wss.on("connection",async(ws)=>{
    console.log("User joined")
    roomManager.addUser(ws)
})
