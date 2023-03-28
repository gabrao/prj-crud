const express = require('express')
const path = require('path')

const db = require('./database')
const routes = require('./routes')


const app = express()



// Conection with DataBase
db.conect()


// Defining tamplate engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// Defining the public files
app.use(express.static(path.join(__dirname, 'public')))

// Set server to receive data by post (froms)
app.use(express.urlencoded({ extended: true }))

// Defining the routes
app.use('/', routes)

// On error 404 (page not found)
app.use((req, res) => {
    res.send('Page not found')
})

// Executing server
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server listen the port ${port}`))