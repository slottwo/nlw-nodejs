import { Router } from 'express'
import { CreateUserController } from './controllers/CreateUserController'
import { CreateTagController } from './controllers/CreateTagController'
import { ensureAdmin } from './middleware/ensureAdmin'
import { AuthenticateUserController } from './controllers/AuthenticateUserController'
import { CreateComplimentController } from './controllers/CreateComplimentController'

const router = Router()

const createTagController = new CreateTagController()
const createUserController = new CreateUserController()
const createComplimentController = new CreateComplimentController()
const authenticateUserController = new AuthenticateUserController()

router.post('/tags', ensureAdmin, createTagController.handle)
router.post('/users', createUserController.handle)
router.post('/login', authenticateUserController.handle)
router.post('/compliments', createComplimentController.handle)

export { router }
