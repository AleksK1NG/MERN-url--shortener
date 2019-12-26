const User = require('../models/User')
const Link = require('../models/Link')
const ErrorResponse = require('../utils/errorsResponse')
const asyncMiddleware = require('../middlewares/asyncMiddleware')
const shortid = require('shortid')

// @POST Get all bootCamps | Public
// api/v1/links
exports.generateLink = asyncMiddleware(async (req, res) => {
  res.status(201).json({})
})

// @GET Get all bootCamps | Public
// api/v1/links
exports.getAllLinks = asyncMiddleware(async (req, res) => {
  res.status(200).json({})
})

// @GET Get all bootCamps | Public
// api/v1/links/:id
exports.getLinkById = asyncMiddleware(async (req, res) => {
  res.status(200).json({})
})
