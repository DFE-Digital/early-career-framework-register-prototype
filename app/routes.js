const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Branching for sign in
// router.post('/admin/preload', function (req, res) {
//   const journeyMode = req.session.data['journey-mode']
//   if (journeyMode === 'schoolNoDecision') {
//     res.redirect('/sprint-16/school-nominate-school-lead/nominate-school-lead-1')
//   } else if (journeyMode === 'schoolFIP') {
//     res.redirect('/sprint-16/school-signed-in/fip/fip-choose-cohort')
//   } else if (journeyMode === 'schoolCIP') {
//     res.redirect('/sprint-16/school-signed-in/cip/cip-choose-cohort')
//   } else {
//     res.redirect('/sprint-16/start')
//   }
// })



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
}) */

// Branching for access to dashboard (/sign-in-continue-to-account)

// BC - Have added this directly into the page //
// router.post('/dashboard', function (req, res) {
//   const journeyMode = req.session.data['journey-mode']
//   if (journeyMode === 'schoolNoDecision') {
//     res.redirect('/school-signed-in/no-decision/privacy-policy')
//   } else if (journeyMode === 'schoolFIP') {
//     res.redirect('/school-signed-in/fip/fip-choose-cohort')
//   } else if (journeyMode === 'schoolCIP') {
//     res.redirect('/school-signed-in/cip/cip-choose-cohort')
//   } else {
//     res.redirect('/start-testing')
//   }
// })



// Branching on choosing provision
router.post('/school-signed-in/no-decision/provision-confirmed', function (req, res) {
  const journeyMode = req.session.data['journey-mode']
  if (journeyMode === 'schoolFIP') {
    res.redirect('/school-signed-in/fip/fip-choose-cohort')
  } else if (journeyMode === 'schoolCIP') {
    res.redirect('/school-signed-in/cip/cip-choose-cohort')
  } else if (journeyMode === 'schoolDYO') {
  res.redirect('/school-signed-in/dyo/dyo-choose-cohort')
} else if (journeyMode === 'schoolNOECT') {
    res.redirect('/school-signed-in/dyo/dyo-choose-cohort-noect')
  }
})

// // Branching on SIT nomination
// router.post('/school-nominate-school-lead/nominate-school-lead-options', function (req, res) {
//   const nqtType = req.session.data['sit-nqts']
//   if (nqtType === 'nqtYes') {
//     res.redirect('/school-nominate-school-lead/nominate-school-lead-2')
//   } else if (nqtType === 'nqtNo') {
//     res.redirect('/school-nominate-school-lead/nominate-school-lead-confirmoptout')
//   } else if (nqtType === 'nqtMaybe') {
//     res.redirect('/school-nominate-school-lead/nominate-school-lead-2')
//   }
// })

// Branching on type of participant being added
// router.post('/school-signed-in/school-add-participants-to-cohort/choose-participant-type', function (req, res) {
//   const participantType = req.session.data.participantType
//   if (participantType === 'ect') {
//     res.redirect('/school-signed-in/school-add-participants-to-cohort/enter-personal-details')
//   } else if (participantType === 'mentor') {
//     res.redirect('/school-signed-in/school-add-participants-to-cohort/new-or-existing-mentor')
//   } else if (participantType === 'sitmentor') {
//     res.redirect('/school-signed-in/school-add-participants-to-cohort/are-you-sure-sitmentor')
//   }
// })

// Branching on type of mentor being added (new or existing)
// router.post('/school-signed-in/school-add-participants-to-cohort/new-or-existing-mentor', function (req, res) {
//   const mentorType = req.session.data['neworexistingmentor']
//   if (mentorType === 'newMentor') {
//     res.redirect('/school-signed-in/school-add-participants-to-cohort/enter-personal-details')
//   } else if (mentorType === 'existingMentor') {
//     res.redirect('/school-signed-in/school-add-participants-to-cohort/mentor-from-existing-cohort')
//   }
// })

// Branching on TRN status of mentor/ect
// router.post('/teacher-or-mentors/cip-validation/trn-ect', function (req, res) {
//   const trnType = req.session.data['trn-look']
//   if (trnType === 'newMentor') {
//     res.redirect('/teacher-or-mentors/cip-validation/trn-info')
//   } else if (trnType === 'existingMentor') {
//     res.redirect('/teacher-or-mentors/cip-validation/name-change-ect')
//   } else if (trnType === 'Mentor') {
//     res.redirect('/teacher-or-mentors/cip-validation/trn-get')
//   }
// })

// Branching on mentor/ect name change
// router.post('/teacher-or-mentors/cip-validation/name-change-ect', function (req, res) {
//   const nameType = req.session.data['name-change']
//   if (nameType === 'newMentor') {
//     res.redirect('/teacher-or-mentors/cip-validation/qct-ect')
//   } else if (nameType === 'existingMentor') {
//     res.redirect('/teacher-or-mentors/cip-validation/update-name')
//   }
// })

// Branching on TRN status of mentor/ect update name
// router.post('/teacher-or-mentors/cip-validation/update-name', function (req, res) {
//   const nameExplain = req.session.data['nameChange']
//   if (nameExplain === 'newMentor') {
//     res.redirect('/teacher-or-mentors/cip-validation/name-not-updated')
//   } else if (nameExplain === 'existingMentor') {
//     res.redirect('/teacher-or-mentors/cip-validation/qct-ect')
//   } else if (nameExplain === 'Mentor') {
//     res.redirect('/teacher-or-mentors/cip-validation/name-maybe')
//   }
// })

// Branching on mentor/ect DQT name change
// router.post('/teacher-or-mentors/cip-validation/name-not-updated', function (req, res) {
//   const dqtName = req.session.data['dqt-change']
//   if (dqtName === 'newMentor') {
//     res.redirect('/teacher-or-mentors/cip-validation/qct-ect')
//   } else if (dqtName === 'existingMentor') {
//     res.redirect('/teacher-or-mentors/cip-validation/dqt-contact')
//   }
// })

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



module.exports = router
