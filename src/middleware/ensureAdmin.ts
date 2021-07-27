import { Request, Response, NextFunction } from 'express'
import { getCustomRepository } from 'typeorm'
import { User } from '../entities/User'
import { UsersRepositories } from '../repositories/UsersRepositories'

export async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { user_id } = request
  const usersRepositories = getCustomRepository(UsersRepositories)
  const { admin } = await usersRepositories.findOne({ id: user_id })

  // Admin user check
  if (admin) {
    return next()
  } else {
    return response.status(401).json({ error: 'Unauthorized user' }) // 401: Unauthorized
  }
}
