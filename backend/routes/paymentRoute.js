const express = require('express');
const { checkout, paymentVerification } = require('../controller/paymentController');
const router = express.Router()
const Payment = require('../models/Payment')
const User = require('../models/User')
const authUser = require('../middleware/authUser')
const dotenv = require('dotenv');
dotenv.config()

router.route('/payment/checkout').post(checkout)
router.route('/payment/verify').post(paymentVerification)
router.route('/payment/key').get((req, res) => res.status(200).json({ key: process.env.RAZORPAY_API_KEY }))



router.get('/getPreviousOrders', authUser, async (req, res) => {
  try {
    const data = await Payment.find({ user: req.user.id }).sort({ createdAt: -1 })
    res.send(data)
  }
  catch (error) {
    res.status(500).send("Something went wrong")
  }
})

module.exports = router