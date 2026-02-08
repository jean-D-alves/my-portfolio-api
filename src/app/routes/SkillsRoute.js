import { Router } from "express";
import { CreateSkills, GetSkills } from "../controllers/SkillsController.js";

const router = Router()

router.post('/',CreateSkills)
router.get('/',GetSkills)

export default router