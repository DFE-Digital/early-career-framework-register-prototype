const { generateRandomString } = require('../utils/helpers')

module.exports = router => {
  router.all([
    '/schools/participants/:id',
    '/schools/participants/:id/*',
    '/support/participants/:id',
    '/support/participants/:id/*',
    '/participants/validate/:id',
    '/participants/validate/:id/*'

  ], (req, res, next) => {
    const data = req.session.data
    res.locals.id = req.params.id
    res.locals.participant = data.participants && data.participants[req.params.id]
    next()
  })

  router.all('/schools/participants/what-each-person-does', (req, res) => {
    res.render('schools/participants/what-each-person-does')
  })

  router.all('/schools/participants', (req, res, next) => {
    const participants = req.session.data.participants
    res.locals.hasECTs = Object.values(participants).some((p) => p.type === 'ect')
    res.locals.hasSitMentor = Object.values(participants).some((p) => p.type === 'sitMentor')
    res.locals.hasEctTransfers = Object.values(participants).some((p) => p.type === 'ectTransfer')
    res.locals.hasMentors = Object.values(participants).some((p) => p.type === 'mentor')
    res.locals.hasMentorTransfers = Object.values(participants).some((p) => p.type === 'mentorTransfer')


    res.locals.hasAnyContactedParticipants = Object.values(participants).some((p) => p.status === 'Contacted'  )
    res.locals.hasAnyCheckingParticipants = Object.values(participants).some((p) => p.status === 'Checking' )
    res.locals.hasAnyCheckingQTSParticipants = Object.values(participants).some((p) => p.status === 'CheckingQTS' )
    res.locals.hasAnyEligibleParticipants = Object.values(participants).some((p) => p.status === 'Eligible'  )
    res.locals.hasAnyTransferInParticipants = Object.values(participants).some((p) => p.status === 'TransferIn' )
    res.locals.hasAnyTransferOutParticipants = Object.values(participants).some((p) => p.status === 'TransferOut' )
    res.locals.hasAnyWithdrawnParticipants = Object.values(participants).some((p) => p.status === 'Withdrawn' )
    res.locals.hasAnyNotEligibleParticipants = Object.values(participants).some((p) => p.status === 'NotEligible' )    
    next()
  })

  // Generates new participant ID for an ECT, Mentor or transfer
  router.all('/schools/participants/add', (req, res) => {
    res.redirect(`/schools/participants/${generateRandomString()}/add/who-do-you-want-to-add`)
  })

  // Generates new participant ID for SIT as a mentor
  router.all('/schools/participants/add/yourself-as-a-mentor', (req, res) => {
    res.redirect(`/schools/participants/${generateRandomString()}/add/yourself-as-a-mentor`)
  })



  router.all('/schools/participants/:id/add/:view', (req, res) => {
    res.render(`schools/participants/add/${req.params.view}`)
  })

  router.all('/schools/participants/:id/add/type', (req, res, next) => {
    const participants = req.session.data.participants
    next()
  })


  router.all('/schools/participants/:id/add/email-address', (req, res, next) => {
    const participants = req.session.data.participants
    res.locals.hasMentors = Object.values(participants).some((p) => p.type === 'mentor')
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
    })
    console.log(res.locals)
    next()
  })

  // Details page for a participant
  router.all('/schools/participants/:id', (req, res) => {
    res.render('schools/participants/details')
  })

  router.all('/support/participants/:id/details/:view', (req, res) => {
    res.render(`support/participants/details/${req.params.view}`)
  })

  // Transfer a participant
  router.all('/schools/participants/:id/transfer-out/', (req, res) => {
    res.render('schools/participants/transfer-out/index')
  })

  router.all('/schools/participants/:id/transfer-out/:view', (req, res) => {
    res.render(`schools/participants/transfer-out/${req.params.view}`)
  })

  // Remove a participant
  router.all('/schools/participants/:id/remove/', (req, res) => {
    res.render('schools/participants/remove/confirm')
  })

  router.all('/schools/participants/:id/remove/:view', (req, res) => {
    res.render(`schools/participants/remove/${req.params.view}`)
  })


  // User validation
  router.all('/participants/validate', (req, res, next) => {
    const participants = req.session.data.participants
    res.locals.hasAnyContacted = Object.values(participants).some((p) => p.status === 'Contacted' )
    next()
  })

  router.all('/schools/participants/validate/:id/:view', (req, res) => {
    res.render(`schools/participants/validate/${req.params.view}`)
  })

  router.all('/schools/participants/:id/change', (req, res, next) => {
    const participants = req.session.data.participants
    res.locals.hasAnyContacted = Object.values(participants).some((p) => p.status === 'Contacted' )
    next()
  })

  router.all('/schools/participants/:id/change/:view', (req, res) => {
    res.render(`schools/participants/change/${req.params.view}`)
  })

}
