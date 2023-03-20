import express from "express";
import cors from "cors";
import accountsRouter from "./routes/accounts.routes.js";
import businessRouter from "./routes/business.routes.js";

const app = express();

app.use(cors());

app.use("/api", accountsRouter);
app.use("/api", businessRouter);

app.use((_req, res, next) => {
  res.status(404).json({
    message: "Endpoint not found",
  });
});

export default app;
