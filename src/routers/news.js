const express = require('express')
const router = new express.Router()
const News = require('../models/news')
const auth = require('../middleware/auth')

const NewsAPI = require('newsapi')
const newsapi = new NewsAPI('121558c37f944ebe8379b78b4bde9923')

router.get('/v2/top-headlines', async (req, res) => {

    newsapi.v2.topHeadlines({
        country: req.query.country,
        category: req.query.category
    }).then(response => {
        res.status(200).send(response) 
    });

})

//save news

router.post('/news', auth, async (req, res) => {
    let news = new News({
        ...req.body
    })
    
    try {
        await news.save()
        res.status(201).send(news)
    } catch (e) {
        res.status(500).send(e)
    }
})


// get news by id
router.get('/news/:id', auth, async (req, res) => {
    try {
        let news = await News.find({ userId : new ObjectId(req.params.userId) } )
        res.status(200).send(news) 
           
    } catch (e) {
        res.status(500).send(e)
    }
})

module.exports = router