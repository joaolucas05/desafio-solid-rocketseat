import express from "express";
import swaggerUi from "swagger-ui-express";

import { usersRoutes } from "./routes/users.routes";

const app = express();
import swaggerFile from "./swagger.json";
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use("/users", usersRoutes);

export { app };
