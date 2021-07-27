import { Router } from 'express'
import { CreateUserController } from './controllers/CreateUserController'
import { CreateTagController } from './controllers/CreateTagController'
import { ensureAdmin } from './middleware/ensureAdmin'
import { AuthenticateUserController } from './controllers/AuthenticateUserController'
import { CreateComplimentController } from './controllers/CreateComplimentController'
import { ensureAuthenticated } from './middleware/ensureAuthenticated'
import { ListUserReceiveComplimentsController } from './controllers/ListUserReceiveComplimentsController'
import { ListUserSendComplimentsController } from './controllers/ListUserSendComplimentsController'
import { ListTagsController } from './controllers/ListTagsController'
import { ListUsersController } from './controllers/ListUsersController'
import { ListAdminUsersController } from './controllers/ListAdminUsersController'

const router = Router()

const createTagController = new CreateTagController()
const createUserController = new CreateUserController()
const createComplimentController = new CreateComplimentController()
const authenticateUserController = new AuthenticateUserController()
const listUserReceiveComplimentsController =
  new ListUserReceiveComplimentsController()
const listUserSendComplimentsController =
  new ListUserSendComplimentsController()
const listTagsController = new ListTagsController()
const listUsersController = new ListUsersController()
const listAdminUsersController = new ListAdminUsersController()

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
router.get('/tags', ensureAuthenticated, listTagsController.handle)
router.get('/users', ensureAuthenticated, listUsersController.handle)
router.get('/users/admin', ensureAuthenticated, listAdminUsersController.handle)

export { router }
