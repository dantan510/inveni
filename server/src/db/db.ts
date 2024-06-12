import { Pool } from 'pg';

import dotenv from 'dotenv'
dotenv.config()

const pool = new Pool ({
  user: String(process.env.PGUSER),
  password: String(process.env.PGPASS),
  host: String(process.env.PGHOST),
  database: String(process.env.PGDATABASE),
  port: Number(process.env.PGPORT)
})

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

export default pool
