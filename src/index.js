import express from 'express';
import dotenv from 'dotenv';
import itemRoutes from './routes/itemRoutes.js';

dotenv.config();
const app = express();
app.use(express.json());

app.use('/api/items', itemRoutes);

app.get('/', (req, res) => res.send('API Cuci Sepatu aktif'));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
