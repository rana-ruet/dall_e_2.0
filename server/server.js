import * as dotenv from 'dotenv';
dotenv.config();

import app from './app.js';
import connectDB from './database/connectDB.js';

try {
  connectDB(process.env.MONGODB_URL);

  app.listen(8080, () => {
    console.log('Server has started on port http://localhost:8080');
  });
} catch (error) {
  console.log(error);
}
