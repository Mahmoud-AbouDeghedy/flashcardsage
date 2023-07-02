import express, { Request, Response } from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
import cors from "cors";
import path from "path";

import deckRouter from "./routes/deckRoutes";

config();

const app = express();

app.use(express.json());
app.use(express.static(path.resolve(__dirname, "..", "client", "dist")));

app.use(cors({ origin: "*" }));
app.use("/decks", deckRouter);
app.get("*", (req, res) => {
	res.sendFile(path.resolve(__dirname, "..", "client", "dist", "index.html"));
});

const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI!).then(() => {
	console.log("connected to db");
	console.log(`listening on port ${port}`);
	app.listen(port);
});
