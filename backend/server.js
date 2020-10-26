const express = require('express')
const app = express()
const mongoose = require('mongoose')
const { PORT, mongoUri } = require('./config')
const cors = require('cors')
const morgan = require('morgan')
const planetRoutes = require('./routes/api/planets')

app.use(cors())
app.use(morgan('tiny'))

mongoose
    .connect(mongoUri, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
            useFindAndModify: false
    })
    .then(() => console.log('MongoDB database Connected...'))
    .catch((err) => console.log(err))

app.use('/api/planets', planetRoutes)

app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}`))