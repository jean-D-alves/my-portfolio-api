import { conectar } from "../config/db.js";

async function main() {
    const db = await conectar()

    await db.exec(`
        CREATE TABLE IF NOT EXISTS skills(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            pathUrl TEXT
        )
    `)
    await db.exec(`
        CREATE TABLE IF NOT EXISTS certification(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            pathUrl TEXT,
            organization TEXT
        )
    `)
    await db.exec(`
        CREATE TABLE IF NOT EXISTS projects(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            pathUrl TEXT,
            href TEXT,
            tags TEXT
        )
    `)
}
main();