const express = require('express')
const router = express.Router()

require('./routes/change-lead-provider')(router)

// Add your routes here - above the module.exports line

// Branching to choose mentor from cohort, if adding an ECT and mentors have already been added to cohort
router.post('/school-signed-in/school-add-participants-to-cohort/confirm-participant-details', function (req, res) {
  const schoolParticipantOptions = req.session.data.schoolParticipantOptions
  const participantType = req.session.data.participantType
  if (schoolParticipantOptions === 'hasAddedMentors' && participantType === 'ect') {
    res.redirect('/school-signed-in/school-add-participants-to-cohort/choose-mentor-for-ect')
  } else if (schoolParticipantOptions === 'canAddParticipants' && participantType === 'ect') {
    res.redirect('/school-signed-in/school-add-participants-to-cohort/confirm-participant-details')
  } else if (schoolParticipantOptions === 'hasAddedMentors' && participantType === 'mentor') {
    res.redirect('/school-signed-in/school-add-participants-to-cohort/choose-ect-for-cohort')
  } else if (schoolParticipantOptions === 'canAddParticipants' && participantType === 'mentor') {
    res.redirect('/school-signed-in/school-add-participants-to-cohort/confirm-participant-details')
  } else if (schoolParticipantOptions === 'hasAddedMentors' && participantType === 'sitmentor') {
    res.redirect('/school-signed-in/school-add-participants-to-cohort/choose-ect-for-cohort')
  } else if (schoolParticipantOptions === 'canAddParticipants' && participantType === 'sitmentor') {
    res.redirect('/school-signed-in/school-add-participants-to-cohort/confirm-participant-details')
  }
})

// Lazy branching as not sure how to do this one properly - it conflicts with other branching above
router.post('/school-signed-in/school-add-participants-to-cohort/confirm-ect-details', function (req, res) {
  res.redirect('/school-signed-in/school-add-participants-to-cohort/confirm-participant-details')
})

router.post('/admin/user-research/participant-start', function (req, res) {
  const firstName = req.session.data.sitName.split(' ')[0]
  req.session.data.sitFirstName = firstName
  res.redirect('/emails/link-to-sign-in')
})

module.exports = router
