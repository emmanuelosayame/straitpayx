import { Request, Response, NextFunction } from 'express';
import { ZodError, ZodSchema, z } from 'zod';

export const validateBody =
  (schema: ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (err) {
      const error = err as ZodError;
      return res.status(400).send(error.errors);
    }
  };

export const validateQuery =
  (schema: ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.query);
      next();
    } catch (err) {
      const error = err as ZodError;
      return res.status(400).send(error.errors);
    }
  };
