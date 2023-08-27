import express from 'express';
import * as dotenv from 'dotenv';
import bodyParser from 'body-parser';
// import cors from 'cors';
import routes from './routes';
import { startMongoose } from './../db/connect';

dotenv.config();

const app = express();
const port = process.env.PORT;

// parse body params and attache them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(cookieParser());

// enable CORS - Cross Origin Resource Sharing
// app.use(cors());

app.use('/api', routes);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

startMongoose();
