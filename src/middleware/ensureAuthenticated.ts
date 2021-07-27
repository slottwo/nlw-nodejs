import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'

interface IPayload {
  sub: string
}

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  // receive token
  const authToken = request.headers.authorization

  // check if token is empty
  if (!authToken) {
    return response.status(401).end()
  }

  // check if token is valid
  const [, token] = authToken.split(' ')

  try {
    const { sub } = verify(
      token,
      'f6ba77dfbbfb49d248ca384febb78090'
    ) as IPayload
    // retrieve user information
    request.user_id = sub
    return next()
  } catch (error) {
    return response.status(401).end()
  }
}
