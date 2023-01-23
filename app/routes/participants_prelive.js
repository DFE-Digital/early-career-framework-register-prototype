const { generateRandomString } = require('../utils/helpers')

module.exports = router => {
  router.all([
    '/prelive/schools/participants/:id',
    '/prelive/schools/participants/:id/*',
    '/prelive/support/participants/:id',
    '/prelive/support/participants/:id/*',
    '/prelive/participants/validate/:id',
    '/prelive/participants/validate/:id/*'

  ], (req, res, next) => {
    const data = req.session.data
    res.locals.id = req.params.id
    res.locals.participant = data.participants && data.participants[req.params.id]
    next()
  })

  router.all('/prelive/schools/participants/what-each-person-does', (req, res) => {
    res.render('prelive/schools/participants/what-each-person-does')
  })

  router.all('/prelive/schools/participants', (req, res, next) => {
    const participants = req.session.data.participants
    res.locals.hasECTs = Object.values(participants).some((p) => p.role === 'ect')
    res.locals.hasSitMentor = Object.values(participants).some((p) => p.role === 'sitMentor')
    res.locals.hasEctTransfers = Object.values(participants).some((p) => p.role === 'ectTransfer')
    res.locals.hasMentors = Object.values(participants).some((p) => p.role === 'mentor')
    res.locals.hasMentorTransfers = Object.values(participants).some((p) => p.role === 'mentorTransfer')
    res.locals.hasAnyContactedParticipants = Object.values(participants).some((p) => p.status === 'Contacted'  )
    res.locals.hasAnyCheckingParticipants = Object.values(participants).some((p) => p.status === 'Checking' )
    res.locals.hasAnyCheckingQTSParticipants = Object.values(participants).some((p) => p.status === 'CheckingQTS' )
    res.locals.hasAnyEligibleECTs = Object.values(participants).some((p) => p.status === 'Eligible' && p.role == "ECT" && p.cohort == "2021" )
    res.locals.hasAnyEligibleECTsNewYear = Object.values(participants).some((p) => p.status === 'Eligible' && p.role == "ECT" && p.cohort == "2022"  )
    res.locals.hasAnyEligibleParticipants = Object.values(participants).some((p) => p.status === 'Eligible'  )
    res.locals.hasAnyTransferInParticipants = Object.values(participants).some((p) => p.status === 'TransferIn' )
    res.locals.hasAnyTransferOutParticipants = Object.values(participants).some((p) => p.status === 'TransferOut' )
    res.locals.hasAnyWithdrawnParticipants = Object.values(participants).some((p) => p.status === 'Withdrawn' )
    res.locals.hasAnyNotEligibleParticipants = Object.values(participants).some((p) => p.status === 'NotEligible' )
    next()
  })

  // Generates new participant ID for an ECT, Mentor or transfer
  router.all('/prelive/schools/participants/add', (req, res) => {
    res.redirect(`/prelive/schools/participants/${generateRandomString()}/add/who-do-you-want-to-add`)
  })

  // Generates new participant ID for SIT as a mentor
  router.all('/prelive/schools/participants/add/yourself-as-a-mentor', (req, res) => {
    res.redirect(`/prelive/schools/participants/${generateRandomString()}/add/yourself-as-a-mentor`)
  })



  router.all('/prelive/schools/participants/:id/add/:view', (req, res) => {
    res.render(`/prelive/schools/participants/add/${req.params.view}`)
  })

  router.all('/prelive/schools/participants/:id/add/type', (req, res, next) => {
    const participants = req.session.data.participants
    next()
  })


  router.all('/prelive/schools/participants/:id/add/email-address', (req, res, next) => {
    const participants = req.session.data.participants
    res.locals.hasMentors = Object.values(participants).some((p) => p.role === 'mentor')
    next()
  })

  router.all('/prelive/schools/participants/:id/add/start-date', (req, res, next) => {
    const participants = req.session.data.participants
    res.locals.hasMentors = Object.values(participants).some((p) => p.role === 'mentor')
    next()
  })

  router.all('/prelive/schools/participants/:id/add/choose-mentor', (req, res, next) => {
    const participants = req.session.data.participants
    // console.log(participants)
    // console.log(Object.values(participants))
    // console.log(Object.values(participants).some((p) => p.role === 'mentor'))
    res.locals.hasMentors = Object.values(participants).some((p) => p.role === 'mentor')
    res.locals.mentors = Object.values(participants).filter((p) => p.role === 'mentor').map(p => {
      return { text: p.name }
    })
    console.log(res.locals)
    next()
  })

  // Details page for a participant
  router.all('/prelive/schools/participants/:id', (req, res) => {
    res.render('/prelive/schools/participants/details')
  })

  router.all('/prelive/support/participants/:id/details/:view', (req, res) => {
    res.render(`/prelive/support/participants/details/${req.params.view}`)
  })

  // Transfer a participant
  router.all('/prelive/schools/participants/:id/transfer-out/', (req, res) => {
    res.render('/prelive/schools/participants/transfer-out/index')
  })

  router.all('/prelive/schools/participants/:id/transfer-out/:view', (req, res) => {
    res.render(`/prelive/schools/participants/transfer-out/${req.params.view}`)
  })

  // Remove a participant
  router.all('/prelive/schools/participants/:id/remove/', (req, res) => {
    res.render('/prelive/schools/participants/remove/confirm')
  })

  router.all('/prelive/schools/participants/:id/remove/:view', (req, res) => {
    res.render(`/prelive/schools/participants/remove/${req.params.view}`)
  })


  // User validation
  router.all('/prelive/participants/validate', (req, res, next) => {
    const participants = req.session.data.participants
    res.locals.hasAnyContacted = Object.values(participants).some((p) => p.status === 'Contacted' )
    next()
  })

  router.all('/prelive/schools/participants/validate/:id/:view', (req, res) => {
    res.render(`/prelive/schools/participants/validate/${req.params.view}`)
  })

  router.all('/prelive/schools/participants/:id/change', (req, res, next) => {
    const participants = req.session.data.participants
    res.locals.hasAnyContacted = Object.values(participants).some((p) => p.status === 'Contacted' )
    next()
  })

  router.all('/prelive/schools/participants/:id/change/:view', (req, res) => {
    res.render(`/prelive/schools/participants/change/${req.params.view}`)
  })

}
