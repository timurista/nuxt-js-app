const express = require('express');

const router = express.Router()

const app = express()
router.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request)
  Object.setPrototypeOf(res, app.response)
  req.res = res
  res.req = req
  next()
})

router.post('/track-data', (req, res) => {
  console.log('stored data!', req.body)
  res.sendStatus(200).json({ message: 'success!'})
})

module.exports = {
  path: '/api',
  handler: router
}
