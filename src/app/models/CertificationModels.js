import { conectar } from "../config/db.js";

export async function CreateCertificationModels(name, pathUrl,organization) {
  const db = await conectar();
  const certification = await db.run(
    "INSERT INTO certification (name,pathUrl,organization) VALUES (?,?,?)",
    [name, pathUrl,organization],
  );
  return GetAllCertificationModels();
}

export async function GetAllCertificationModels() {
  const db = await conectar();
  const certification = await db.all("SELECT * FROM certification");
  return certification;
}


