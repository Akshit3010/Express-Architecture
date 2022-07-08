"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    name: String,
    address: String,
    age: Number,
    isMarried: Boolean,
});
exports.UserModel = (0, mongoose_1.model)("user", UserSchema);
