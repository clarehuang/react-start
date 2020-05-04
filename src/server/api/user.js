const express = require('express')
const passport = require('passport')
const User = require('../models/user')
const router = express.Router()

// router.get('/login', (req, res, next) => {
//   res.cookie('sessionId', 'Luo', { httpOnly: true }).status(200).redirect(301, '/').end()
// })

router.post('/register', function (req, res) {
  User.register(new User({ username: req.body.username }), req.body.password, function (
    err,
    account
  ) {
    if (err) {
      return res.render('register', { account })
    }

    passport.authenticate('local')(req, res, function () {
      res.redirect('/')
    })
  })
})

router.post('/login', passport.authenticate('local'), function (req, res) {
  res.redirect('/')
})

router.get('/logout', function (req, res) {
  req.logout()
  res.redirect('/')
})

router.get('/*', (req, res, next) => {
  res.send(403)
})

module.exports = router
