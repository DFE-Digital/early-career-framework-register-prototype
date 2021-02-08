const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line


// Branching for register-school-2
router.post('/register-school/register-school-3', function (req, res) {
  const willYouBeTrainingAnswer = req.session.data['will-you-be-training']
  if (willYouBeTrainingAnswer === 'yes') {
    res.redirect('/register-school/register-school-3')
  } else {
    res.redirect('/register-school/register-later-no-participants')
  }
})

// Branching for register-school-3
router.post('/register-school/register-school-4', function (req, res) {
  const chosenInductionTraining = req.session.data['chosen-induction-training']
  if (chosenInductionTraining === 'yes') {
    res.redirect('/register-school/register-school-4')
  } else {
    res.redirect('/register-school/register-later-no-decision')
  }
})





module.exports = router
