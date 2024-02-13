import express from "express";
import routes from "../routes";
import helmet from "helmet";
import cors from "cors";

const app = express();
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routes(app);

export default app;
