const router = require('express').Router()

router.get('/', (req, res, next) => {
    res.end('/product' + Math.random())
})

module.exports = router
