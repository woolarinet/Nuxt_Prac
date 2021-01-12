const router = require('express').Router()
const passport = require('passport')
const app = require('express')()
const axios = require('axios')

// 로그인
router.get('/oauth', async (req, res, next) => {
  console.log(req.statusCode)
    // const authCode = req.query.code
    // if(!Object.prototype.hasOwnProperty.call(authCode, 'code')) {
    //   return res.status(400).end('invalid_code')
    // } else {
    //     console.log(authCode)
    //     res.send('I got it')
    // }
    // try {
    //     console.log('test)
    // } catch(err) {
    //     res.status(400).send(err)
    // }
})
module.exports = router

// axios.get('/oauth')
//   .then(res => {
//     const authCode = req.query.code
//     if(!Object.prototype.hasOwnProperty.call(authCode, 'code')){
//         return res.status(400).end('invalid_code')
//     } else {
//         console.log('haanananana')
//     }
//   }).catch((err) => {
//       console.log('test2')
//   })
// module.exports = axios

// app.get('/user/:id', (req, res) => {
//     console.log('heelo')
// })

// module.exports = app
