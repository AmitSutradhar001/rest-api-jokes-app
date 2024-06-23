import express from "express";
import cors from "cors";
import apiMiddleware from "./middleware/apiMiddleware.js";
import apiRoute from "./routes/api.js";
import "dotenv/config";

const PORT = process.env.PORT || 7000;
const app = express();

const corsOptions = {
  origin: "*",
  credentials: false,
};
app.use(cors(corsOptions));

// API
app.use("/api/:userKey", apiMiddleware, apiRoute);
app.listen(PORT, () => console.log(`Server is running on ${PORT}!`));
