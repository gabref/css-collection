const express = require('express')
const path = require('path')

const PORT = process.argv[2] || 3050
const app = express()

app.use('/css-collection/js', express.static(path.resolve(__dirname, 'js')))
app.use('/css-collection/css', express.static(path.resolve(__dirname, 'css')))
app.use('/css-collection/pages', express.static(path.resolve(__dirname, 'pages')))

app.get('/css-collection/*', (_, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'))
})

app.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`)
})
