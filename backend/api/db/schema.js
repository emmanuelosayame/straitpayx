"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const todoS = new mongoose_1.default.Schema({
    //   id: String,
    title: String,
    description: String,
    createdAt: { type: Date, default: Date.now(), immutable: true },
    dueAt: Date,
});
const todoModel = mongoose_1.default.model('Todo', todoS);
exports.todoModel = todoModel;
//# sourceMappingURL=schema.js.map