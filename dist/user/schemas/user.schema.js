"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const mongoose = require("mongoose");
exports.UserSchema = new mongoose.Schema({
    fullName: { type: String },
    age: { type: String },
    email: { type: String },
    password: { type: String },
});
//# sourceMappingURL=user.schema.js.map