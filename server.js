import dotenv from 'dotenv';
dotenv.config();  // 👈 Load .env variables first

import { app } from './app.js';

const port = process.env.PORT || 4000; // fallback to 3000 if PORT is undefined

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
