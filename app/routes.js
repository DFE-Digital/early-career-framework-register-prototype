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
  if (journeyMode === 'schoolNoDecision') {
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
  const participantType = req.session.data['participantType']
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

// Branching to choose mentor from cohort, if adding an ECT and mentors have already been added to cohort
router.post('/school-signed-in/school-add-participants-to-cohort/confirm-participant-details', function (req, res) {
  const schoolParticipantOptions = req.session.data['schoolParticipantOptions']
  const participantType = req.session.data['participantType']
  if (schoolParticipantOptions === 'hasAddedMentors' && participantType === 'ect'){
    res.redirect('/school-signed-in/school-add-participants-to-cohort/choose-mentor-for-ect')
  } else {
    res.redirect('/school-signed-in/school-add-participants-to-cohort/confirm-participant-details')
  }
})

// Lazy branching as not sure how to do this one properly - it conflicts with other branching above
router.post('/school-signed-in/school-add-participants-to-cohort/confirm-ect-details', function (req, res) {
  res.redirect('/school-signed-in/school-add-participants-to-cohort/confirm-participant-details')
})

module.exports = router
