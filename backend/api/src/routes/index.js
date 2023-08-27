"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todo_1 = require("./todo");
const router = (0, express_1.Router)();
router.use('/', todo_1.taskRouter);
// Validating all the APIs with jwt token.
// router.use(
//   expressJwt({
//     secret: process.env.jwtSecret,
//     algorithms: ['HS256'],
//     resultProperty: 'locals.session',
//     getToken: function fromHeaderOrQuerystring(req) {
//       if (
//         req.headers.authorization &&
//         req.headers.authorization.split(' ')[0] === 'Bearer'
//       ) {
//         return req.headers.authorization.split(' ')[1];
//       }
//       if (req.query && req.query.token) {
//         return req.query.token;
//       }
//       return null;
//     },
//   })
// );
exports.default = router;
//# sourceMappingURL=index.js.map