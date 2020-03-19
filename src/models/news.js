const mongoose = require('mongoose')

const newsSchema = new mongoose.Schema(
    {
      userId: {
        type: String,
        required: false,
        trim: true,
      },
      title: {
        type: String,
        required: false,
        trim: true,
      },
      publishedAt: {
        type: String,
        required: false,
        trim: true,
      },
      author: {
        type: String,
        required: false,
        trim: true,
      },
      content: {
        type: String,
        required: false,
        trim: true,
      }
    },
    {
      timestamps: true,
    }
  )

const News = mongoose.model('News', newsSchema)

module.exports = News