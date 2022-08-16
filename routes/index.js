    const express = require('express')
    const router = express.Router()

//@description login/landing page
//route GET /

router.get('/', (req,res)=> {
    res.render('login')
})

//@description Dashboard
//route GET /dashboard

router.get('/dashboard', (req,res)=> {
    res.render('dashboard')
})


    modeule.exports = router