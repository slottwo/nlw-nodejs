import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import { getCustomRepository } from 'typeorm'
import { UsersRepositories } from '../repositories/UsersRepositories'

interface IAuthenticateRequest {
  email: string
  password: string
}

export class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateRequest) {
    const userRepositories = getCustomRepository(UsersRepositories)

    const user = await userRepositories.findOne({ email })

    // Check email
    if (!user) {
      throw new Error('Email or password incorrect')
    }

    // Check password
    const passwordMatch = compare(password, user.password)
    if (!passwordMatch) {
      throw new Error('Email or password incorrect')
    }

    // Generate token
    const token = sign(
      { email: user.email },
      'f6ba77dfbbfb49d248ca384febb78090',
      { subject: user.id, expiresIn: '1d' }
    )

    return token
  }
}
