import http from "http";
import dotenv from "dotenv";
import app from "./app.js";

dotenv.config();

const server = http.createServer(app);

server.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
