
app.get('/', async (req, res, next) => {
    let query = req.query
    console.log('123123')
    if(!Object.prototype.hasOwnProperty.call(query, 'code')){
        return res.status(400).end('invalid_code')
    }

  try{
    const resoponse = await request('http://kauth.kakao.com/oauth/token', {
        method: 'POST',
        data: {
            grant_type: 'authorization_code',
            client_id: '1fc40a99e818a5b832d30dc5806a62ec',
            redirect_uri: 'http://localhost:3000/user/call_back',
            code: req.query.code,
        },
        headers: {
            'Content-type': 'application/x-www-form-rlencoded;charset=utf-8',
        },
    })

    if(response.statusCode >= 400) {
        return res.status(400).end('Fail!!!!')
    }

    const tokenToJoson = JSON.parse(response.body)
    console.log(tokenToJoson)
    res.json(tokenToJoson)
  } catch(err) {
      res.status(400).end(err)
  }
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const admin = require('./routes/admin')
const users = require('./routes/users')
const product = require('./routes/product')
const { request, response } = require('express')

app.use('/admin', admin)
app.use('/product', product)
app.use('/users', users)

module.exports = {
    path: '/api',
    handler: app
}
