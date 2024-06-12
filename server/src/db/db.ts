import { Pool } from 'pg';

import dotenv from 'dotenv'
dotenv.config()

const pool = new Pool ({
  user: String(process.env.PG_USER || 'postgres'),
  password: String(process.env.PG_PASS || 'qqqq'),
  host: String(process.env.PG_HOST || 'localhost'),
  database: String(process.env.PG_DATABASE || 'inveni'),
  port: Number(process.env.PG_PORT || 5432)
})

export default pool
