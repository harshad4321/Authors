const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.render('authors/index')

})

// New Router for auth
router.get('/new', (req, res) => {
    res.render('auth/new')
})


// Create Auth Routh
router.post('/', (req, res) => {
    res.send('create')
})

module.exports = router;