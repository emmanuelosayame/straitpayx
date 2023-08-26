import { Router } from 'express';
import { authRouter } from './auth';
import { taskRouter } from './task';

const router = Router();

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) => res.send('OK'));

router.use('/auth', authRouter);
router.use('/task', taskRouter);

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

// // mount user routes at /users
// router.use('/users', userRoutes);

// // mount book routes at /books
// router.use('/books', bookRoutes);

export default router;
