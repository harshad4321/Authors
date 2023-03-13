const express = require('express')
const router = express.Router()

const Author = require('../models/auth')

router.get('/', (req, res) => {
    res.render('authors/index')

})

// New Author Route
router.get('/new', (req, res) => {
    res.render('authors/new', { author: new Author() })
})


// Create Auth Routh
router.post('/', async (req, res) => {
    const author = new Author({
        name: req.body.name
    })
    try {
        const newAuthor = await author.save()

        // res.redirect(`author/${newAuthor.id}`)
        res.redirect(`authors`)

    } catch {
        res.render('authors/new', {
            author: author,
            errorMessage: 'error creathing on author'

        })
    }
})


module.exports = router;