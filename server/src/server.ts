import http from "http";
import dotenv from "dotenv";
import app from "./app.ts";
import { loadPlanetsData } from "./models/planets.model.ts";

dotenv.config();

const server = http.createServer(app);

async function startServer() {
  await loadPlanetsData();

  server.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Failed to start server:", err);
});
