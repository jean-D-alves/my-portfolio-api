import path from "path";
import { fileURLToPath } from "url";
import sqlite3 from "sqlite3";
import { open } from "sqlite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function conectar() {
  return open({
    filename: path.join(__dirname, "../../database/database.sqlite"),
    driver: sqlite3.Database,
  });
}
