import { Server } from "node:http";
import ExpressConfig from "./express.config";
import express from "express";
import path from "node:path";
import { wss } from "./websocket/websocket.config";

const app = ExpressConfig();
app.use(express.static(path.join(__dirname, "public")));

const server: Server = require("http").createServer(app);
const ws = wss(server)

const PORT = process.env.PORT || 5002;

server.listen(PORT, () => console.log(`🚀 Server Running on port ${PORT} ... Go to http://localhost:${PORT}/index.html for Index page.`));
// app.listen(PORT, );