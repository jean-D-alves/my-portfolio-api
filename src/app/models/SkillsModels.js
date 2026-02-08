import { conectar } from "../config/db.js";

export async function Create(name, pathUrl) {
  const db = await conectar();
  const Skills = await db.run(
    "INSERT INTO skills (name,pathUrl) VALUES (?,?)",
    [name, pathUrl],
  );
  return GetAll();
}

export async function GetAll() {
  const db = await conectar();
  const Skills = await db.all("SELECT * FROM skills");
  return Skills;
}


