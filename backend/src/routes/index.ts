import { Router } from 'express';
import { taskRouter } from './todo';

const router = Router();

router.use('/', taskRouter);

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

export default router;
