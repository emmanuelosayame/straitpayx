"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskS = void 0;
const zod_1 = require("zod");
exports.taskS = zod_1.z.object({
    id: zod_1.z.string(),
    title: zod_1.z.string().max(50),
    description: zod_1.z.string(),
});
//# sourceMappingURL=z_schema.js.map