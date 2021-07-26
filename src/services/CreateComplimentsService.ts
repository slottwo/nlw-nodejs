import { compare } from 'bcryptjs'
import { getCustomRepository } from 'typeorm'
import { ComplimentsRepositories } from '../repositories/ComplimentsRepositories'
import { TagsRepositories } from '../repositories/TagsRepositories'
import { UsersRepositories } from '../repositories/UsersRepositories'

interface IComplimentRequest {
  tag_id: string
  user_sender: string
  user_receiver: string
  message: string
}

export class CreateComplimentService {
  async execute({
    tag_id,
    user_sender,
    user_receiver,
    message
  }: IComplimentRequest) {
    const tagRepository = getCustomRepository(TagsRepositories)
    const userRepository = getCustomRepository(UsersRepositories)
    const complimentsRepository = getCustomRepository(ComplimentsRepositories)

    // tag checking
    const tag = await tagRepository.findOne({
      id: tag_id
    })

    if (!tag) {
      throw new Error('Tag does not exist')
    }

    if (!tag_id) {
      throw new Error('Incorrect tag')
    }

    // the user sender was authenticated, that is, the sender exists and is correct
    if (user_sender === user_receiver) {
      throw new Error('A user cannot praise himself')
    }

    const userReceiver = await userRepository.findOne({
      id: user_receiver
    })

    if (!userReceiver) {
      throw new Error('User receiver does not exist')
    }

    // creating tag
    const compliment = complimentsRepository.create({
      tag_id,
      user_receiver,
      user_sender,
      message
    })

    // saving tag
    await complimentsRepository.save(compliment)

    return compliment
  }
}
