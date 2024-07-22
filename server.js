import express from "express";
import { WebSocketServer } from "ws";

const app = express();
const port=8080;

const server = app.listen(8080, () => {
    console.log('Server is running');
});

const wss = new WebSocketServer({ server });

wss.on("connection" , (ws) => {
    ws.on("message", (data) => {
        console.log("data of client %s: ", data);
        ws.send("thanks buddy")
    })
});
