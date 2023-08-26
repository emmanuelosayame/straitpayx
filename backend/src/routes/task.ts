import { Router } from 'express';
import { customAlphabet } from 'nanoid';
import { validateQuery, validateBody } from '../../src/middleware';
import { hash } from 'bcrypt';
import { taskS } from './../../lib/z_schema';
const router = Router();

const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyz123456789');

router.get('/list', validateQuery(taskS), async (req, res) => {
  const paymentId = nanoid(7);
  const { name, phone, email, password } = req.body;
  const hashedPassword = await hash(password, 10);
  try {
    res.status(200).json(
      //   await prisma.user.create({
      //     data: {
      //       paymentIds: [paymentId],
      //       name,
      //       phone,
      //       email,
      //       password: hashedPassword,
      //     },
      //     select: { email: true, name: true, paymentIds: true, phone: true },
      //   })
      'yikes'
    );
  } catch (err) {
    res.status(500).json(err as Error);
  }
});

router.get('/:id', validateQuery(taskS), async (req, res) => {
  const id = req.params.id;

  try {
    res.status(200).json('yikes');
  } catch (err) {
    res.status(500).json(err as Error);
  }
});

router.post('/create', validateBody(taskS), async (req, res) => {
  const paymentId = nanoid(7);
  const { name, phone, email, password } = req.body;
  const hashedPassword = await hash(password, 10);
  try {
    res.status(200).json(
      //   await prisma.user.create({
      //     data: {
      //       paymentIds: [paymentId],
      //       name,
      //       phone,
      //       email,
      //       password: hashedPassword,
      //     },
      //     select: { email: true, name: true, paymentIds: true, phone: true },
      //   })
      'yikes'
    );
  } catch (err) {
    res.status(500).json(err as Error);
  }
});

router.post('/update', validateQuery(taskS), async (req, res) => {
  const id = req.params.id;

  try {
    res.status(200).json('yikes');
  } catch (err) {
    res.status(500).json(err as Error);
  }
});

router.delete('/delete', validateQuery(taskS), async (req, res) => {
  const id = req.params.id;

  try {
    res.status(200).json('yikes');
  } catch (err) {
    res.status(500).json(err as Error);
  }
});

export { router as taskRouter };
