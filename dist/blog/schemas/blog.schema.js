"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogSchema = void 0;
const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;
exports.BlogSchema = new mongoose.Schema({
    title: { type: String },
    description: { type: String },
    body: { type: String },
    author: { type: ObjectId, ref: 'User' },
    date_posted: { type: String }
});
//# sourceMappingURL=blog.schema.js.map