import express from "express";
import cors from "cors";

import { ENV_VARS } from "./config/server.config.js";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(ENV_VARS.PORT, () => {
  console.log(`Server started on http://localhost:${ENV_VARS.PORT}`);
});
