const express = require('express')
const router = express.Router()
const orderController = require('../controllers/orderController')
const menuController = require('../controllers/menuController')
const userController = require('../controllers/userController')
const {authorizeWaiter } = require('../middleware/authoriztionWaiter')
const {authorizeCashier} = require('../middleware/authoriztionCashier')
const {authenticationMiddleWare} = require('../middleware/authentication')



// Waiter
router.post('/login',userController.Login)
router.post('/waiterregister',userController.waiterRegister)

//Cashier
router.post('/cashierregister',userController.cashierRegister)


// Menu
router.get('/menu', menuController.getMenu)
router.post('/menu',authenticationMiddleWare, menuController.addMenu)
router.get('/menu/:id', menuController.getMenuId)
router.delete('/menu/:id', menuController.deleteMenu)
router.put('/menu/:id',authenticationMiddleWare, menuController.editMenu)

// Item
router.get('/order', orderController.getOrder)
router.post('/order',authenticationMiddleWare,authorizeWaiter, orderController.addOrder)
router.get('/order/:id', orderController.getOrderId)
router.delete('/order/:id', orderController.deleteOrder)
router.put('/order/:id',authenticationMiddleWare, orderController.editOrder)
router.patch('/order/:id',authenticationMiddleWare,authorizeCashier, orderController.updateOrder)



module.exports = router