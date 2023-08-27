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
exports.taskRouter = void 0;
const express_1 = require("express");
const nanoid_1 = require("nanoid");
const middleware_1 = require("../middleware");
const zod_1 = require("zod");
const schema_1 = require("../../db/schema");
const z_schema_1 = require("../../lib/z_schema");
const router = (0, express_1.Router)();
exports.taskRouter = router;
const nanoid = (0, nanoid_1.customAlphabet)('abcdefghijklmnopqrstuvwxyz123456789');
router.get('/todos', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tasks = yield schema_1.todoModel.find({});
        res.setHeader('Content-Type', 'text/html');
        res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
        res.status(200).json(tasks);
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
router.get('/todos/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const todo = yield schema_1.todoModel.findById(id);
        if (todo) {
            res.status(200).json(todo);
        }
        else {
            res.status(404).json('NO TODO');
        }
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
router.post('/create', (0, middleware_1.validateBody)(z_schema_1.taskS.omit({ id: true })), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { description, title } = req.body;
    try {
        const todo = yield schema_1.todoModel.create({
            title,
            description,
        });
        res.status(200).json(todo);
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
router.post('/update', (0, middleware_1.validateBody)(z_schema_1.taskS.partial()), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { description, title, id } = req.body;
    try {
        const todo = yield schema_1.todoModel.findByIdAndUpdate(id, {
            $set: { description, title },
        });
        res.status(200).json(todo);
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
router.delete('/delete', (0, middleware_1.validateBody)(zod_1.z.object({ id: zod_1.z.string() })), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        const todo = yield schema_1.todoModel.findByIdAndDelete(id);
        res.status(200).json(todo);
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
//# sourceMappingURL=todo.js.map