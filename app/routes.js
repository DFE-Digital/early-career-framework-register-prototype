const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line


// Branching for sign in
router.post('/start-testing', function (req, res) {
  const journeyMode = req.session.data['journey-mode']
  if (journeyMode === 'trainingprovider') {
    res.redirect('/pseudo-email-training-provider-invite')
  }
  else if (journeyMode === 'schooldecisionmaker') {
    res.redirect('/pseudo-email-school-invite')
  } else {
    res.redirect('/start')
  }
})


// Branching for sign in
router.post('/sign-in-check-email', function (req, res) {
  const journeyMode = req.session.data['journey-mode']
  if (journeyMode === 'noaccount') {
    res.redirect('/sign-in-no-account')
  }
  // disabling school sign in for the timebeing
  else if (journeyMode === 'schooldecisionmaker') {
    res.redirect('/sign-in-no-account')
  } else {
    res.redirect('/sign-in-check-email')
  }
})

// Branching for access to dashboard (/sign-in-continue-to-account)
router.post('/dashboard', function (req, res) {
  const journeyMode = req.session.data['journey-mode']
  if (journeyMode === 'trainingprovider') {
    res.redirect('/training-provider-signed-in/dashboard-training-provider')
  }
  else if (journeyMode === 'schoolNoDecision') {
    res.redirect('/school-signed-in/no-decision/prompt-choose-provision')
  } else {
    res.redirect('/sign-in-no-account')
  }
})

// Branching on choosing provision
router.post('/school-signed-in/no-decision/prompt-choose-provision', function (req, res) {
  const journeyMode = req.session.data['journey-mode']
  if (journeyMode === 'schoolFIP') {
    res.redirect('/school-signed-in/fip/fip-cohort-detail')
  } else {
    res.redirect('/school-signed-in/cip/cip-course-choice')
  }
})





module.exports = router
