"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateQuery = exports.validateBody = void 0;
const validateBody = (schema) => (req, res, next) => {
    try {
        schema.parse(req.body);
        next();
    }
    catch (err) {
        const error = err;
        return res.status(400).send(error.errors);
    }
};
exports.validateBody = validateBody;
const validateQuery = (schema) => (req, res, next) => {
    try {
        schema.parse(req.query);
        next();
    }
    catch (err) {
        const error = err;
        return res.status(400).send(error.errors);
    }
};
exports.validateQuery = validateQuery;
//# sourceMappingURL=middleware.js.map