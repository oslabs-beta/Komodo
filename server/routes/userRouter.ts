const express = require('express')
const userRouter = express.Router();

//routers go here
userRouter.post('/signup', userController.createUser, (req, res) => {
  return res.status(200).json(res.locals.newUser);
})

userRouter.post('/login', userController.login, (req, res) => {
  return res.status(200).json({
    message: 'Login successful!',
    username: res.locals.username
  })
})

module.exports = userRouter