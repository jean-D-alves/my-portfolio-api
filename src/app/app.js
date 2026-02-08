import express from "express";
import router from "./routes/SkillsRoute.js";
import CertificationRoute from "./routes/CertificationRoute.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
  }),
);

app.use("/Skills", router);
app.use("/Certification", CertificationRoute);

export default app;
