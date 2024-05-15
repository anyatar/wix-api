import express, { Application } from "express";
import apiRoutes from "./api.routes";

const router = express.Router();
router.use("/", apiRoutes);

export default router;