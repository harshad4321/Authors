const express = require('express')
const router = express.Router()
const Author = require('../models/auth')

router.get('/', async (req, res) => {
    let secarchOption = {}
    if (req.query.name != null && req.query.name !== '') {
        secarchOption.name = new RegExp(req.query.name, 'i')

    }
    try {
        const authors = await Author.find(secarchOption)
        console.log('>>>>>>>', authors);
        res.render('authors/index',
            {
                authors: authors,
                secarchOption: req.query
            })
    } catch {
        res.redirect('/')
    }

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
        console.log(newAuthor);

    } catch {
        res.render('authors/new', {
            author: author,
            errorMessage: 'error creathing on author'

        })
    }

})


module.exports = router;