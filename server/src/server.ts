import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'


const app: Express = express()
dotenv.config()

const PORT = process.env.PORT || 3001

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!!')
})

app.get('/hi', (req: Request, res: Response) => {
  res.send('Hi')
})

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`)
})