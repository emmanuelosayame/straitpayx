import mongoose from 'mongoose';

const todoS = new mongoose.Schema({
  //   id: String,
  title: String,
  description: String,
  createdAt: { type: Date, default: Date.now(), immutable: true },
  dueAt: Date,
});

const todoModel = mongoose.model('Todo', todoS);

export { todoModel };
