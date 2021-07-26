import 'reflect-metadata'
import express, { Request, Response, NextFunction } from 'express'
import 'express-async-errors'

import { router } from './routes'

import './database'

const app = express()

// Setting the app to use json
app.use(express.json())

// Router
app.use(router)

// Middleware (Error Handling)
app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
      return response.status(400).json({ error: err.message })
    }
    return response.status(500).json({
      status: 'error',
      message: 'Internal Server Error'
    })
  }
)

// baseURL: http://localhost:3000
app.listen(3000, () => console.log('Sever is Running'))
