import { getCustomRepository } from 'typeorm'
import { TagsRepositories } from '../repositories/TagsRepositories'

export class CreateTagService {
  async execute(name: string) {
    const tagRepository = getCustomRepository(TagsRepositories)

    // trowing erros { name empty, duplicate tag name }
    if (!name) {
      throw new Error('Incorrect name')
    }

    const tagAlreadyExists = await tagRepository.findOne({
      name
    }) // SELECT * FROM TAGS WHERE NAME = 'name'

    if (tagAlreadyExists) {
      throw new Error('Tag already exists')
    }

    // creating tag
    const tag = tagRepository.create({ name })

    // saving tag
    await tagRepository.save(tag)

    return tag
  }
}
