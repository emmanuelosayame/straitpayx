import mongoose from 'mongoose';

export const startMongoose = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
