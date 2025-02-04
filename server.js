const dotenv = require('dotenv')
const express = require('express')
const mongoSanitize = require('express-mongo-sanitize')
const helmet = require('helmet')
const xss = require('xss-clean')
const rateLimit = require('express-rate-limit')
const cookieParser = require('cookie-parser')
const hpp = require('hpp')
const cors = require('cors')
const morgan = require('morgan')
const colors = require('colors')
const errorMiddleware = require('./middlewares/errorMiddleware')

const connectDB = require('./db/db')

// Load .env files
dotenv.config({ path: './config/config.env' })

// Connect DB
connectDB()

// Routes
const authRoutes = require('./routes/authRoutes')
const linkRoutes = require('./routes/linkRoutes')
const redirectRoutes = require('./routes/redirectRoutes')

// Init Express
const app = express()

// Body parser
app.use(express.json())

// Cookie parser
app.use(cookieParser())

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

// Sanitize data
// https://blog.websecurify.com/2014/08/hacking-nodejs-and-mongodb.html
app.use(mongoSanitize())

// Set security headers
app.use(helmet())

// Prevent XSS attacks
app.use(xss())

// Rate limiting
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 mins
  max: 100,
})
app.use(limiter)

// Prevent http param pollution
app.use(hpp())

// Enable CORS
app.use(cors())

// Use routes
app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/links', linkRoutes)
app.use('/t', redirectRoutes)

// Error middleware
app.use(errorMiddleware)

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'client', 'build')))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const PORT = process.env.PORT || 5000
// Run Server
const server = app.listen(PORT, () => console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red)
  // Close server & exit process
  server.close(() => process.exit(1))
})
