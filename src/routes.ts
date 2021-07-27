import { Router } from 'express'
import { CreateUserController } from './controllers/CreateUserController'
import { CreateTagController } from './controllers/CreateTagController'
import { ensureAdmin } from './middleware/ensureAdmin'
import { AuthenticateUserController } from './controllers/AuthenticateUserController'
import { CreateComplimentController } from './controllers/CreateComplimentController'
import { ensureAuthenticated } from './middleware/ensureAuthenticated'
import { ListUserReceiveComplimentsController } from './controllers/ListUserReceiveComplimentsController'
import { ListUserSendComplimentsController } from './controllers/ListUserSendComplimentsController'

const router = Router()

const createTagController = new CreateTagController()
const createUserController = new CreateUserController()
const createComplimentController = new CreateComplimentController()
const authenticateUserController = new AuthenticateUserController()
const listUserReceiveComplimentsController =
  new ListUserReceiveComplimentsController()
const listUserSendComplimentsController =
  new ListUserSendComplimentsController()

router.post(
  '/tags',
  ensureAuthenticated,
  ensureAdmin,
  createTagController.handle
)
router.post('/users', createUserController.handle)
router.post('/login', authenticateUserController.handle)
router.post(
  '/compliments',
  ensureAuthenticated,
  createComplimentController.handle
)

router.get(
  '/users/compliments/receive',
  ensureAuthenticated,
  listUserReceiveComplimentsController.handle
)
router.get(
  '/users/compliments/send',
  ensureAuthenticated,
  listUserSendComplimentsController.handle
)

export { router }
