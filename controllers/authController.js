const User = require('../models/User')
const ErrorResponse = require('../utils/errorsResponse')
const asyncMiddleware = require('../middlewares/asyncMiddleware')
const tokenResponse = require('../utils/tokenResponse')

// @POST Register user | Public
// Route: /api/v1/auth/register
exports.registerUser = asyncMiddleware(async (req, res, next) => {
  const { email, password } = req.body

  const checkUser = await User.findOne({ email })

  if (checkUser) return next(new ErrorResponse('Invalid credentials', 401))

  // Create user
  const user = await User.create(req.body)

  tokenResponse(user, 201, res)
})

// @POST Login user | Public
// Route: /api/v1/auth/register
exports.loginUser = asyncMiddleware(async (req, res, next) => {
  const { email, password } = req.body

  // Validate email and password
  if (!email || !password) return next(new ErrorResponse('Invalid email or password', 400))

  // Check for user exists
  const user = await User.findOne({ email }).select('+password')

  if (!user) return next(new ErrorResponse('Invalid credentials', 401))

  // Compare passwords
  const isMatch = await user.matchPassword(password)
  if (!isMatch) return next(new ErrorResponse('Invalid email or password', 400))

  tokenResponse(user, 200, res)
})

// @GET Get current logged in user | Private
// Route: /api/v1/auth/me
exports.getCurrentUser = asyncMiddleware(async (req, res, next) => {
  if (!req.user) return next(new ErrorResponse('Invalid credentials', 401))
  res.status(200).json(req.user)
})

// @GET Logout | Private
// Route: /api/v1/auth/logout
exports.logout = asyncMiddleware(async (req, res) => {
  res.cookie('token', 'none', { expires: new Date(Date.now() + 10 * 1000), httpOnly: true })

  res.status(200).json({ message: 'You are logged out', data: {} })
})
