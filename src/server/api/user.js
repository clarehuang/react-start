const express = require('express')
const router = express.Router()

router.get('/login', (req, res, next) => {
  res.cookie('sessionId', 'Luo', { httpOnly: true }).status(200).redirect(301, '/').end()
})

router.get('/*', (req, res, next) => {
  res.send(403)
})

module.exports = router
