const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Branching for sign in
router.post('/start-testing', function (req, res) {
  const journeyMode = req.session.data['journey-mode']
  if (journeyMode === 'schoolNoDecision') {
    res.redirect('/school-nominate-school-lead/nominate-school-lead-1')
  }
  else if (journeyMode === 'schoolFIP') {
    res.redirect('/school-signed-in/fip/fip-choose-cohort')
  } else if (journeyMode === 'schoolCIP') {
    res.redirect('/school-signed-in/cip/cip-choose-cohort')
  } else {
    res.redirect('/start')
  }
})


// Branching for sign in
/*
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
})*/

// Branching for access to dashboard (/sign-in-continue-to-account)
router.post('/dashboard', function (req, res) {
  const journeyMode = req.session.data['journey-mode']
  if (journeyMode === 'trainingprovider') {
    res.redirect('/training-provider-signed-in/dashboard-training-provider')
  } else if (journeyMode === 'schoolNoDecision') {
    res.redirect('/school-signed-in/no-decision/privacy-policy')
  } else if (journeyMode === 'schoolFIP') {
    res.redirect('/school-signed-in/fip/fip-choose-cohort')
  } else if (journeyMode === 'schoolCIP') {
    res.redirect('/school-signed-in/cip/cip-choose-cohort')
  } else {
    res.redirect('/start-testing')
  }
})

// Branching on choosing provision
router.post('/school-signed-in/no-decision/provision-confirmed', function (req, res) {
  const journeyMode = req.session.data['journey-mode']
  if (journeyMode === 'schoolFIP') {
    res.redirect('/school-signed-in/fip/fip-choose-cohort')
  } else {
    res.redirect('/school-signed-in/cip/cip-choose-cohort')
  }
})





module.exports = router
