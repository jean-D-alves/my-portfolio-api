import { Router } from "express";
import { CreateCertification, GetCertification } from "../controllers/CertificationController.js";

const CertificationRoute = Router()

CertificationRoute.post('/',CreateCertification)
CertificationRoute.get('/',GetCertification)

export default CertificationRoute