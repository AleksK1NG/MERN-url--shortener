
const User = require('../models/User')
const ErrorResponse = require('../utils/errorsResponse')
const asyncMiddleware = require('../middlewares/asyncMiddleware')

// @POST Register user | Public
// Route: /api/v1/auth/register
exports.registerUser = asyncMiddleware(async (req, res, next) => {
  const { email, password, role, name } = req.body

  const checkUser = await User.findOne({ email })

  if (checkUser) return next(new ErrorResponse('Invalid credentials', 401))

  // Create user
  const user = await User.create({
    name,
    email,
    password,
    role
  })

  tokenResponse(user, 200, res)
})