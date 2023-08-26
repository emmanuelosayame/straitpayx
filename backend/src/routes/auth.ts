import { Router } from 'express';

const authRouter = Router();

// const paramValidation = {
//   login: {
//     body: Joi.object({
//       email: Joi.string().email().required(),
//       password: Joi.string().required(),
//     }),
//   },
//   registerUser: {
//     body: Joi.object({
//       email: Joi.string().email().required(),
//       password: Joi.string().required(),
//       firstName: Joi.string(),
//       lastName: Joi.string(),
//     }),
//   },
// };

/** POST /api/auth/login - Returns token if correct username and password is provided */
authRouter.get('/login', (req, res) => res.send('OK'));

/** POST /api/auth/register - Register a new user */
// router.route('/register').post();

export { authRouter };
