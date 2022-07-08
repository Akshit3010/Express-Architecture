"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_routes_1 = require("./routes/auth.routes");
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("config"));
const url = config_1.default.get("db.url");
mongoose_1.default.connect(url);
const app = (0, express_1.default)();
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use("/auth", auth_routes_1.authRouter);
app.get("/", (req, res) => res.send("Hello"));
app.listen(8080, () => {
    console.log("server started on http://localhost:8080/");
});
