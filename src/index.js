const express = require('express')
require('./db/mongoose')
const cors = require('cors')
const app = express()
const port = 3001

const newsRouter = require('./routers/news')
const userRouter = require('./routers/user')

app.use(express.json())
app.use(cors())
app.use(userRouter)
app.use(newsRouter)

app.listen(port, () => {
    console.log(`Server is running in ${port}`)
  })