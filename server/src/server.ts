import express, { Express, Request, Response } from 'express';
import pool from './db/db';
import dotenv from 'dotenv';
import cors from 'cors';

const app: Express = express();
dotenv.config();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;

app.get('/', async (req: Request, res: Response) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM users');
    client.release();
    res.json(result.rows);
  } catch (error) {
    console.error('Error executing query: ', error);
    res.status(500).json({ error: 'Internal Server Error' })
  }
});

async function connectToPostgres() {
  try {
    await pool.connect()
    console.log('Postgres connected');
  } catch (error) {
    console.error('Error connecting to Postgres: ', error)
    process.exit(1)
  }
}

connectToPostgres()

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
