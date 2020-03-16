const express = require('express')
const router = new express.Router()

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

module.exports = router