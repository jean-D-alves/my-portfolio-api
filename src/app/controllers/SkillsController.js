import { Create, GetAll } from "../models/SkillsModels.js";

export async function CreateSkills(req, res) {
  const { name, pathUrl } = req.body;
  const skills = await Create(name, pathUrl);
  res.json(skills);
}
export async function GetSkills(req, res) {
  const skills = await GetAll();
  res.json(skills);
}
