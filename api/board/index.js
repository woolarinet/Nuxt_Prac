const router = require('express').Router()

router.get('/', (req, res, next) => {
    res.end('/borad' + Math.random())
})

module.exports = router
