const User = require('../models/User')
const Link = require('../models/Link')
const ErrorResponse = require('../utils/errorsResponse')
const asyncMiddleware = require('../middlewares/asyncMiddleware')
const shortid = require('shortid')

// @POST Get all bootCamps | Public
// api/v1/links
exports.generateLink = asyncMiddleware(async (req, res, next) => {
  const baseUrl = process.env.BASE_URL
  const { from } = req.body

  const code = shortid.generate()

  const isExists = await Link.findOne({ from })
  if (isExists) return next(new ErrorResponse('Link already exists', 400))

  const to = baseUrl + '/t/' + code

  const link = await Link.create({
    code,
    to,
    from,
    owner: req.user._id,
  })

  res.status(201).json({ data: link })
})

// @GET Get all bootCamps | Public
// api/v1/links
exports.getAllLinks = asyncMiddleware(async (req, res) => {
  const { user } = req
  console.log('getAllLinks user => ', user)

  const links = await Link.find()

  console.log('getAllLinks links => ', links)

  res.status(200).json({ data: links })
})

// @GET Get all bootCamps | Public
// api/v1/links/:id
exports.getLinkById = asyncMiddleware(async (req, res, next) => {
  const link = await Link.findById(req.params.id)
  if (!link) return next(new ErrorResponse('Link not found', 400))

  res.status(200).json({ data: link })
})
