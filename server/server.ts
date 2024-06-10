import express, { Express, Request, Response } from 'express'

const port = 3001

const app: Express = express()

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!!!!!!!!!!!!!')
})

app.get('/hi', (req: Request, res: Response) => {
  res.send('Hi')
})

app.listen(port, () => {
  console.log(`Now listening on port ${port}`)
})
