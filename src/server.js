const express = require('express')
const path = require('path')

const app = express()

// Defining tamplate engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// Defining the public files
app.use(express.static(path.join(__dirname, 'public')))

// Set server to receive data by post (froms)
app.use(express.urlencoded({ extended: true }))

// Routes
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Home'
    })
})

// On error 404 (page not found)
app.use((req, res) => {
    res.send('Page not found')
})

// Executing server
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server listen the port ${port}`))