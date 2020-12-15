const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line


// Branching for Prove identity
router.post('/identity-answer', function (req, res) {
  const identityAnswer = req.session.data['identity-answer']
  if (identityAnswer === 'sign-in') {
    res.redirect('/sign-in')
  } else {
    res.redirect('/create-account-1')
  }
})



module.exports = router
