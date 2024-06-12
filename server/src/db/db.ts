import { Pool } from 'pg';

import dotenv from 'dotenv'
dotenv.config()

const pool = new Pool ({
  user: String(process.env.PG_USER),
  password: String(process.env.PG_PASS),
  host: String(process.env.PG_HOST),
  database: String(process.env.PG_DATABASE),
  port: Number(process.env.PG_PORT)
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
