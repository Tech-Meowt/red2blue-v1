import jwt from 'jsonwebtoken'
// import { UnAuthenticatedError } from '../errors/index.js'

const isAuthenticated = (req, res, next) => {
  const { authorization } = req.headers
  if (!authorization) {
    res.status(401)
    throw new Error('🚫 Unauthorized 🚫');
  }
  try {
    const token = authorization.split(' ')[1];
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.payload = payload;
  } catch (err) {
    res.status(401);
    if (err.name === 'TokenExpiredError') {
      throw new Error(err.name)
    }
    throw new Error('🚫 Unauthorized 🚫');
  }
  return next()
}
// UnAuthenticatedError
// const auth = async (req, res, next) => {
//   const authHeader = req.headers.authorization
//   if (!authHeader || !authHeader.startsWith('Bearer')) {
//     throw new UnAuthenticatedError('Authentication Invalid')
//   }
//   const token = authHeader.split(' ')[1]
//   try {
//     const payload = jwt.verify(token, process.env.JWT_SECRET)
//     req.user = { userId: payload.userId }

//     next()
//   } catch (error) {
//     throw new UnAuthenticatedError('Authentication Invalid')
//   }
// }

// export default auth
export { isAuthenticated }
