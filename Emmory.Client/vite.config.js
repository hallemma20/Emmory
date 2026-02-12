import fs from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const API_PATH = "/api/clothing";
const DATA_FILE = fileURLToPath(new URL("./src/data/clothingData.json", import.meta.url));

function createClothingApiPlugin() {
  return {
    name: "mock-clothing-api",
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (!req.url?.startsWith(API_PATH)) {
          next();
          return;
        }

        if (req.method === "GET") {
          try {
            const content = await fs.readFile(DATA_FILE, "utf8");
            const items = JSON.parse(content);
            res.setHeader("Content-Type", "application/json");
            res.statusCode = 200;
            res.end(JSON.stringify(items));
          } catch {
            res.statusCode = 500;
            res.end(JSON.stringify({ message: "Unable to read clothing data." }));
          }

          return;
        }

        if (req.method === "POST") {
          try {
            const body = await new Promise((resolve, reject) => {
              let raw = "";

              req.on("data", chunk => {
                raw += chunk;
              });
              req.on("end", () => resolve(raw));
              req.on("error", reject);
            });

            const incoming = JSON.parse(body);
            const content = await fs.readFile(DATA_FILE, "utf8");
            const items = JSON.parse(content);
            const nextId =
              items.length === 0 ? 1 : Math.max(...items.map(item => Number(item.id) || 0)) + 1;
            const newItem = {
              id: nextId,
              name: incoming.Name ?? incoming.name ?? "",
              category: Number(incoming.Category ?? incoming.category ?? 0),
              brand: incoming.Brand ?? incoming.brand ?? "",
              colour: incoming.Colour ?? incoming.colour ?? "",
              createdAt: new Date().toISOString()
            };

            items.push(newItem);
            await fs.writeFile(DATA_FILE, `${JSON.stringify(items, null, 2)}\n`, "utf8");

            res.setHeader("Content-Type", "application/json");
            res.statusCode = 201;
            res.end(JSON.stringify(newItem));
          } catch {
            res.statusCode = 500;
            res.end(JSON.stringify({ message: "Unable to save clothing item." }));
          }

          return;
        }

        next();
      });
    }
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), createClothingApiPlugin()]
});
