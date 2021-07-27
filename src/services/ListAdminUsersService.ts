import { getCustomRepository } from 'typeorm'
import { UsersRepositories } from '../repositories/UsersRepositories'

import { classToPlain } from 'class-transformer'

export class ListAdminUsersService {
  async execute() {
    const usersRepositories = getCustomRepository(UsersRepositories)
    const admin_users = await usersRepositories.find({ where: { admin: true } })
    return classToPlain(admin_users)
  }
}
