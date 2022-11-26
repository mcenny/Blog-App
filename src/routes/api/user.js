const {Router} = require('express')

const route = Router()

route.get('/', (req, res) => {
    // TODO: send current user
    res.send({
        "user": {
            "email": "user@email.com",
            "token": "jwt.usertoken.now",
            "username": "Jackson",
            "bio": "This is a short bio about the user",
            "image": null
        }
    })
})

// const { userAuthViaToken } = require('../../middlewares/auth')

// route.get('/', userAuthViaToken, (req, res) => {
//   if (req.user) {
//     res.send(req.user)
//   }
// })



module.exports = route