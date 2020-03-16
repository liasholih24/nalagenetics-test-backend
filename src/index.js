const express = require('express')
const app = express()
const port = 3001

const newsRouter = require('./routers/news')

app.use(express.json())
app.use(newsRouter)

app.listen(port, () => {
    console.log(`Server is running in ${port}`)
  })