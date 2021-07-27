import { Request, Response } from 'express'
import { ListAdminUsersService } from '../services/ListAdminUsersService'

export class ListAdminUsersController {
  async handle(request: Request, response: Response) {
    const listAdminUsersService = new ListAdminUsersService()
    const admin_users = await listAdminUsersService.execute()
    return response.json(admin_users)
  }
}
