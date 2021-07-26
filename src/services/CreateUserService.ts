import { hash } from 'bcryptjs'
import { getCustomRepository } from 'typeorm'
import { UsersRepositories } from '../repositories/UsersRepositories'

interface IUserRequest {
  name: string
  email: string
  admin?: boolean
  password: string
}

export class CreateUserService {
  async execute({ name, email, admin = false, password }: IUserRequest) {
    const userRepository = getCustomRepository(UsersRepositories)

    // trowing erros { email empty, duplicate email }
    if (!email) {
      throw new Error('Incorrect email')
    }

    const userAlreadyExists = await userRepository.findOne({
      email
    })

    if (userAlreadyExists) {
      throw new Error('User already exists')
    }

    // encrypting password
    const passwordHash = await hash(password, 8)

    // creating user
    const user = userRepository.create({
      name,
      email,
      admin,
      password: passwordHash
    })

    // saving user
    await userRepository.save(user)

    return user
  }
}
