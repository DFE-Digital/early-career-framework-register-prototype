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


// Branching on type of participant being added
router.post('/school-signed-in/school-add-participants-to-cohort/choose-participant-type', function (req, res) {
  const participantType = req.session.data['participant-type']
  if (participantType === 'ect') {
    res.redirect('/school-signed-in/school-add-participants-to-cohort/enter-personal-details')
  } else if (participantType === 'mentor')  {
    res.redirect('/school-signed-in/school-add-participants-to-cohort/new-or-existing-mentor')
  }
})

// Branching on type of mentor being added (new or existing)
router.post('/school-signed-in/school-add-participants-to-cohort/new-or-existing-mentor', function (req, res) {
  const mentorType = req.session.data['new-or-existing-mentor']
  if (mentorType === 'newMentor') {
    res.redirect('/school-signed-in/school-add-participants-to-cohort/enter-personal-details')
  } else if (mentorType === 'existingMentor')  {
    res.redirect('/school-signed-in/school-add-participants-to-cohort/mentor-from-existing-cohort')
  }
})



module.exports = router
