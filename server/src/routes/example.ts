import { Router } from "express";
import { Example } from "../service/example";

const router = Router();
const example = new Example();

router.get("/", example.getExampleJson);

export default router;
