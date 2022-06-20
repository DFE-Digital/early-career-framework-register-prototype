const { generateRandomString } = require('../utils/helpers')

module.exports = router => {
  router.all([
    '/schools/participants/:id',
    '/schools/participants/:id/*',
    '/support/participants/:id',
    '/support/participants/:id/*',
    '/schools/participants/validate/:id',
    '/schools/participants/validate/:id/*'
  ], (req, res, next) => {
    const data = req.session.data
    res.locals.id = req.params.id
    res.locals.participant = data.participants && data.participants[req.params.id]
    next()
  })

  router.all('/schools/participants/what-each-person-does', (req, res) => {
    res.render('schools/participants/what-each-person-does')
  })

  router.all('/schools/participants/contacted-user-list', (req, res) => {
    res.render('schools/participants/contacted-user-list')
  })

  router.all('/schools/validate', (req, res, next) => {
    const participants = req.session.data.participants
    res.locals.hasAnyContacted = Object.values(participants).some((p) => p.status === 'Contacted' )
    next()
  })

  router.all('/schools/participants', (req, res, next) => {
    const participants = req.session.data.participants
    res.locals.hasECTs = Object.values(participants).some((p) => p.type === 'ect')
    res.locals.hasSitMentor = Object.values(participants).some((p) => p.type === 'sitMentor')
    res.locals.hasEctTransfers = Object.values(participants).some((p) => p.type === 'ectTransfer')
    res.locals.hasMentors = Object.values(participants).some((p) => p.type === 'mentor')
    res.locals.hasMentorTransfers = Object.values(participants).some((p) => p.type === 'mentorTransfer')
    res.locals.hasAnyContactedParticipants = Object.values(participants).some((p) => p.status === 'Contacted' && p.programme == "FIP" && p.cohort2021 == "Yes" )
    res.locals.hasAnyContactedParticipants22 = Object.values(participants).some((p) => p.status === 'Contacted' && p.programme == "FIP" && p.cohort2022 == "Yes"  )
    res.locals.hasAnyContactedParticipantsCIP = Object.values(participants).some((p) => p.status === 'Contacted' && p.programme == "CIP"  )
    res.locals.hasAnyContactedParticipantsCIP22 = Object.values(participants).some((p) => p.status === 'Contacted' && p.programme == "CIP" && p.cohort2022 == "Yes" )
    res.locals.hasAnyCheckingParticipants = Object.values(participants).some((p) => p.status === 'Checking' && p.programme == "FIP" && p.cohort2021 == "Yes" )
    res.locals.hasAnyCheckingParticipants22 = Object.values(participants).some((p) => p.status === 'Checking' && p.programme == "FIP" && p.cohort2022 == "Yes" )
    res.locals.hasAnyCheckingParticipantsCIP = Object.values(participants).some((p) => p.status === 'Checking' && p.programme == "CIP" && p.cohort2021 == "Yes" )
    res.locals.hasAnyCheckingParticipantsCIP22 = Object.values(participants).some((p) => p.status === 'Checking' && p.programme == "CIP" && p.cohort2022 == "Yes" )
    res.locals.hasAnyCheckingQTSParticipants = Object.values(participants).some((p) => p.status === 'CheckingQTS' && p.programme == "FIP" && p.cohort2021 == "Yes" )
    res.locals.hasAnyCheckingQTSParticipants22 = Object.values(participants).some((p) => p.status === 'CheckingQTS' && p.programme == "FIP" && p.cohort2022 == "Yes")
    res.locals.hasAnyCheckingQTSParticipantsCIP = Object.values(participants).some((p) => p.status === 'CheckingQTS' && p.programme == "CIP" && p.cohort2021 == "Yes" )
    res.locals.hasAnyCheckingQTSParticipantsCIP22 = Object.values(participants).some((p) => p.status === 'CheckingQTS' && p.programme == "CIP" && p.cohort2022 == "Yes" )
    res.locals.hasAnyEligibleParticipants = Object.values(participants).some((p) => p.status === 'Eligible' && p.programme == "FIP" && p.cohort2021 == "Yes" )
    res.locals.hasAnyEligibleParticipants22 = Object.values(participants).some((p) => p.status === 'Eligible' && p.programme == "FIP" && p.cohort2022 == "Yes")
    res.locals.hasAnyEligibleParticipantsCIP = Object.values(participants).some((p) => p.status === 'Eligible' && p.programme == "CIP"  )
    res.locals.hasAnyEligibleParticipantsCIP22 = Object.values(participants).some((p) => p.status === 'Eligible' && p.programme == "CIP" && p.cohort2022 == "Yes" )
    res.locals.hasAnyTransferInParticipants = Object.values(participants).some((p) => p.status === 'TransferIn' && p.programme == "FIP" && p.cohort2021 == "Yes" )
    res.locals.hasAnyTransferInParticipants22 = Object.values(participants).some((p) => p.status === 'TransferIn' && p.programme == "FIP" && p.cohort2022 == "Yes")
    res.locals.hasAnyTransferOutParticipants = Object.values(participants).some((p) => p.status === 'TransferOut' && p.programme == "FIP" && p.cohort2021 == "Yes" )
    res.locals.hasAnyTransferOutParticipants22 = Object.values(participants).some((p) => p.status === 'TransferOut' && p.programme == "FIP" && p.cohort2022 == "Yes")
    res.locals.hasAnyWithdrawnParticipants = Object.values(participants).some((p) => p.status === 'Withdrawn' && p.programme == "FIP" && p.cohort2021 == "Yes" )
    res.locals.hasAnyWithdrawnParticipants22 = Object.values(participants).some((p) => p.status === 'Withdrawn' && p.programme == "FIP" && p.cohort2022 == "Yes")
    res.locals.hasAnyNotEligibleParticipants = Object.values(participants).some((p) => p.status === 'NotEligible' && p.programme == "FIP" && p.cohort2021 == "Yes" )
    res.locals.hasAnyNotEligibleParticipants22 = Object.values(participants).some((p) => p.status === 'NotEligible' && p.programme == "FIP" && p.cohort2022 == "Yes" )
    res.locals.hasAnyTransferInParticipantsCIP = Object.values(participants).some((p) => p.status === 'TransferIn' && p.programme == "CIP" && p.cohort2021 == "Yes" )
    res.locals.hasAnyTransferInParticipantsCIP22 = Object.values(participants).some((p) => p.status === 'TransferIn' && p.programme == "CIP" && p.cohort2022 == "Yes" )
    res.locals.hasAnyTransferOutParticipantsCIP = Object.values(participants).some((p) => p.status === 'TransferOut' && p.programme == "CIP" && p.cohort2021 == "Yes" )
    res.locals.hasAnyTransferOutParticipantsCIP22 = Object.values(participants).some((p) => p.status === 'TransferOut' && p.programme == "CIP" && p.cohort2022 == "Yes" )
    res.locals.hasAnyWithdrawnParticipantsCIP = Object.values(participants).some((p) => p.status === 'Withdrawn' && p.programme == "CIP" && p.cohort2021 == "Yes" )
    res.locals.hasAnyWithdrawnParticipantsCIP22 = Object.values(participants).some((p) => p.status === 'Withdrawn' && p.programme == "CIP" && p.cohort2022 == "Yes" )
    res.locals.hasAnyNotEligibleParticipantsCIP = Object.values(participants).some((p) => p.status === 'NotEligible' && p.programme == "CIP" && p.cohort2021 == "Yes" )
    res.locals.hasAnyNotEligibleParticipantsCIP22 = Object.values(participants).some((p) => p.status === 'NotEligible' && p.programme == "CIP" && p.cohort2022 == "Yes" )
    res.locals.hasAnyContactedMentorParticipants = Object.values(participants).some((p) => p.status === 'Contacted' && p.type == "mentor" && p.programme == "FIP" && p.cohort2021 == "Yes" )
    res.locals.hasAnyContactedMentorParticipants22 = Object.values(participants).some((p) => p.status === 'Contacted' && p.type == "mentor" && p.programme == "FIP" && p.cohort2022 == "Yes")
    res.locals.hasAnyContactedMentorParticipantsCIP = Object.values(participants).some((p) => p.status === 'Contacted' && p.type == "mentor" && p.programme == "CIP" && p.cohort2021 == "Yes" )
    res.locals.hasAnyContactedMentorParticipantsCIP22 = Object.values(participants).some((p) => p.status === 'Contacted' && p.type == "mentor" && p.programme == "CIP" && p.cohort2022 == "Yes" )
    res.locals.hasAnyCheckingMentorParticipants = Object.values(participants).some((p) => p.status === 'Checking' && p.type == "mentor" && p.programme == "FIP" && p.cohort2021 == "Yes" )
    res.locals.hasAnyCheckingMentorParticipants22 = Object.values(participants).some((p) => p.status === 'Checking' && p.type == "mentor" && p.programme == "FIP" && p.cohort2022 == "Yes" )
    res.locals.hasAnyCheckingMentorParticipants = Object.values(participants).some((p) => p.status === 'Checking' && p.type == "mentor" && p.programme == "CIP" && p.cohort2021 == "Yes" )
    res.locals.hasAnyCheckingMentorParticipants22 = Object.values(participants).some((p) => p.status === 'Checking' && p.type == "mentor" && p.programme == "CIP" && p.cohort2022 == "Yes" )
    res.locals.hasAnyCheckingQTSMentorParticipants = Object.values(participants).some((p) => p.status === 'CheckingQTS' && p.type == "mentor" && p.programme == "FIP" && p.cohort2021 == "Yes" )
    res.locals.hasAnyCheckingQTSMentorParticipants22 = Object.values(participants).some((p) => p.status === 'CheckingQTS' && p.type == "mentor" && p.programme == "FIP" && p.cohort2022 == "Yes" )
    res.locals.hasAnyCheckingQTSMentorParticipantsCIP = Object.values(participants).some((p) => p.status === 'CheckingQTS' && p.type == "mentor" && p.programme == "CIP" && p.cohort2021 == "Yes" )
    res.locals.hasAnyCheckingQTSMentorParticipantsCIP22 = Object.values(participants).some((p) => p.status === 'CheckingQTS' && p.type == "mentor" && p.programme == "CIP" && p.cohort2022 == "Yes" )
    res.locals.hasAnyEligibleMentorParticipants = Object.values(participants).some((p) => p.status === 'Eligible' && (p.type === "mentor" || "sitMentor") && p.programme == "FIP" && p.cohort2021 == "Yes" )
    res.locals.hasAnyEligibleMentorParticipants22 = Object.values(participants).some((p) => p.status === 'Eligible' && (p.type === "mentor" || "sitMentor") && p.programme == "FIP" && p.cohort2022 == "Yes" )
    res.locals.hasAnyEligibleMentorParticipantsCIP = Object.values(participants).some((p) => p.status === 'Eligible' && p.type == "mentor" && p.programme == "CIP" && p.cohort2021 == "Yes" )
    res.locals.hasAnyEligibleMentorParticipantsCIP22 = Object.values(participants).some((p) => p.status === 'Eligible' && p.type == "mentor" && p.programme == "CIP" && p.cohort2022 == "Yes" )
    next()
  })

//   Generates new participant ID for an ECT, Mentor or transfer
  router.all('/schools/participants/add', (req, res) => {
    res.redirect(`/schools/participants/${generateRandomString()}/add/who-do-you-want-to-add`)
  })

//   Generates new participant ID for SIT as a mentor
  router.all('/schools/participants/add/yourself-as-a-mentor', (req, res) => {
    res.redirect(`/schools/participants/${generateRandomString()}/add/yourself-as-a-mentor`)
  })






router.all('/schools/participants/:id', (req, res) => {
    res.render('schools/participants/details')
})



  router.all('/schools/participants/:id/add/email-address', (req, res, next) => {
    const participants = req.session.data.participants
    res.locals.hasMentors = Object.values(participants).some((p) => p.type === 'mentor')
    next()
  })

  router.all('/schools/participants/:id/add/type', (req, res, next) => {
    const participants = req.session.data.participants
    next()
  })

  router.all('/schools/participants/:id/add/start-date', (req, res, next) => {
    const participants = req.session.data.participants
    res.locals.hasMentors = Object.values(participants).some((p) => p.type === 'mentor')
    next()
  })

  router.all('/schools/participants/:id/add/choose-mentor', (req, res, next) => {
    const participants = req.session.data.participants
    // console.log(participants)
    // console.log(Object.values(participants))
    // console.log(Object.values(participants).some((p) => p.type === 'mentor'))
    res.locals.hasMentors = Object.values(participants).some((p) => p.type === 'mentor')
    res.locals.mentors = Object.values(participants).filter((p) => p.type === 'mentor').map(p => {
      return { text: p.name }
      // `${p.name} ${p.email}`
    })
    // res.locals.mentors.push({ text: 'Add a new mentor' })
    // res.locals.mentors = Object.values(participants).filter((p) => p.type === 'mentor')
    console.log(res.locals)
    next()
  })

  router.all('/schools/participants/:id/add/:view', (req, res) => {
    res.render(`schools/participants/add/${req.params.view}`)
  })


  router.all('/schools/participants/:id/transfer/', (req, res) => {
    res.render('schools/participants/transfer/index')
  })

  router.all('/schools/participants/:id/transfer/:view', (req, res) => {
    res.render(`schools/participants/transfer/${req.params.view}`)
  })


  router.all('/schools/participants/:id/remove/', (req, res) => {
    res.render('schools/participants/remove/confirm')
  })

  router.all('/schools/participants/:id/remove/:view', (req, res) => {
    res.render(`schools/participants/remove/${req.params.view}`)
  })

  router.all('/support/participants/:id/', (req, res) => {
    res.render('support/participants/details')
})
router.all('/support/participants/:id/details/:view', (req, res) => {
    res.render(`support/participants/details/${req.params.view}`)
})



}
