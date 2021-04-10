const express = require('express')
const cors = require('cors')

const processingDataRouter = require('./routes/processing-data-router')

const app = express()
const apiPort = 5000

app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => { res.send('Here Toolbox!') })

app.use('/api', processingDataRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
