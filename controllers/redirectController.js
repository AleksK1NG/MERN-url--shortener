const Link = require('../models/Link')
const ErrorResponse = require('../utils/errorsResponse')
const asyncMiddleware = require('../middlewares/asyncMiddleware')

exports.redirectHandler = asyncMiddleware(async (req, res, next) => {
  const link = await Link.findOne({ code: req.params.code })

  if (!link) return next(new ErrorResponse('Link not found', 404))

  link.clicks++
  await link.save()
  return res.redirect(link.from)
})
