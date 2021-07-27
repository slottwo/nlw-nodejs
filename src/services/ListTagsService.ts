import { getCustomRepository } from 'typeorm'
import { TagsRepositories } from '../repositories/TagsRepositories'
import { classToPlain } from 'class-transformer'

export class ListTagsService {
  async execute() {
    const tagsRepositories = getCustomRepository(TagsRepositories)
    const tags = await tagsRepositories.find()
    // let tags = await tagsRepositories.find()
    // tags = tags.map(tag => ({ ...tag, nameCustom: `#${tag.name}` }))
    return classToPlain(tags)
  }
}
