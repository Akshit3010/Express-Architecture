"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const user_model_1 = require("../models/user.model");
function createUser({ name, address, age, isMarried }) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!name) {
            return { message: "no userName", status: "error" };
        }
        const userExist = yield user_model_1.UserModel.findOne({ name });
        if (userExist === null || userExist === void 0 ? void 0 : userExist.name) {
            return { message: "User Already exists", status: "error" };
        }
        const user = new user_model_1.UserModel({
            name,
            address,
            age,
            isMarried,
        });
        yield user.save();
        return {
            message: "User Created Successfully",
            status: "success",
        };
    });
}
exports.createUser = createUser;
