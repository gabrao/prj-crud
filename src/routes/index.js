const router = require('express').Router()
const CustomersController = require('../controller/customers')
const indexController = require('../controller/index')

// Routes
router.get('/', indexController.index)


router.get('/register', CustomersController.index)
router.post('/register/add', CustomersController.add)

router.get('/list', CustomersController.listUsers)

module.exports = router