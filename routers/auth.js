const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    // res.redirect('auth/index')
    res.send('haiiii')
})



module.exports = router;