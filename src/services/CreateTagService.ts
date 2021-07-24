import { getCustomRepository } from 'typeorm'
import { Tag } from '../entities/Tag'
import { TagsRepositories } from '../repositories/TagsRepositories'

export class CreateUserService {
  async execute(name: string) {
    const tagsRepository = getCustomRepository(TagsRepositories)

    if (!name) {
      throw new Error('Incorrect name')
    }

    // const userAlreadyExists = await userRepository.findOne({
    //   email
    // })

    // if (userAlreadyExists) {
    //   throw new Error('User already exists')
    // }

    const tag = tagsRepository

    // await userRepository.save(tag)

    // return user
  }
}
