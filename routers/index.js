const express = require('express')
const router = express.Router()

const Author = require('../models/auth')

router.get('/', (req, res) => {
    res.render('authors/index')

})

// New Author Route
router.get('/new', (req, res) => {
    res.render('auth/new', { author: new Author() })
})


// Create Auth Routh
router.post('/', (req, res) => {
    res.send('create')
})

module.exports = router;