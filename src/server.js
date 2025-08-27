import express from 'express';
import cors from 'cors';

import {geminiRoutes} from './routes/geminiRoutes.js';


const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/resolver", geminiRoutes);

app.listen(3000, () => console.log('Server running on port 3000'));