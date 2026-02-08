import { CreateCertificationModels,GetAllCertificationModels } from "../models/CertificationModels.js";

export async function CreateCertification(req, res) {
  const { name, pathUrl,organization } = req.body;
  const cetification = await CreateCertificationModels(name, pathUrl,organization);
  res.json(cetification);
}
export async function GetCertification(req, res) {
  const cetification = await GetAllCertificationModels();
  res.json(cetification);
}
