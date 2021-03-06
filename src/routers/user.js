const express = require('express')
const User = require('../models/user')
const auth = require('../middleware/auth')
const router = new express.Router()

// register
router.post('/users/register', async (req, res) => {
  const user = new User(req.body)

  try {
    const token = await user.generateAuthToken()
    await user.save()
    
    res.status(201).send({user, token})
  } catch (e) {
    res.status(400).send(e)
  }
})

// login
router.post('/users/login', async (req, res) => {
  try {
    const user = await User.findByCredentials(req.body.email, req.body.password)
    const token = await user.generateAuthToken()
    res.status(200).send({user, token})
  } catch (e) {
    res.status(422).send({
      message: 'Login Gagal',
    })
  }
})

module.exports = router
