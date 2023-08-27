import { Router } from 'express';
import { customAlphabet } from 'nanoid';
import { validateBody } from '../middleware';
import { z } from 'zod';
import { todoModel } from '../../db/schema';
import { taskS } from '../../lib/z_schema';
const router = Router();

const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyz123456789');

router.get('/todos', async (req, res) => {
  try {
    const tasks = await todoModel.find({});
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json(err as Error);
  }
});

router.get('/todos/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const todo = await todoModel.findById(id);
    if (todo) {
      res.status(200).json(todo);
    } else {
      res.status(404).json('NO TODO');
    }
  } catch (err) {
    res.status(500).json(err as Error);
  }
});

router.post(
  '/create',
  validateBody(taskS.omit({ id: true })),
  async (req, res) => {
    const { description, title } = req.body;

    try {
      const todo = await todoModel.create({
        title,
        description,
      });
      res.status(200).json(todo);
    } catch (err) {
      res.status(500).json(err as Error);
    }
  }
);

router.post('/update', validateBody(taskS.partial()), async (req, res) => {
  const { description, title, id } = req.body;
  try {
    const todo = await todoModel.findByIdAndUpdate(id, {
      $set: { description, title },
    });
    res.status(200).json(todo);
  } catch (err) {
    res.status(500).json(err as Error);
  }
});

router.delete(
  '/delete',
  validateBody(z.object({ id: z.string() })),
  async (req, res) => {
    const { id } = req.body;

    try {
      const todo = await todoModel.findByIdAndDelete(id);
      res.status(200).json(todo);
    } catch (err) {
      res.status(500).json(err as Error);
    }
  }
);

export { router as taskRouter };
