import express from "express";

import { router as islaiduTipaiRouter } from "./islaiduTipai.js";

export const router = express.Router();

router.use("/islaiduTipai", islaiduTipaiRouter);