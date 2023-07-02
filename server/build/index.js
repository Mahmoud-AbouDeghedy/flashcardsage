"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = require("dotenv");
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const deckRoutes_1 = __importDefault(require("./routes/deckRoutes"));
(0, dotenv_1.config)();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.static(path_1.default.resolve("../client/dist/index.html")));
app.use((0, cors_1.default)());
app.use("/decks", deckRoutes_1.default);
const port = process.env.PORT || 3000;
mongoose_1.default.connect(process.env.MONGO_URI).then(() => {
    console.log("connected to db");
    console.log(`listening on port ${port}`);
    app.listen(port);
});
