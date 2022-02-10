const { generateRandomString } = require('../utils/helpers')

module.exports = router => {
  router.all([
    '/schools/participants/:id',
    '/schools/participants/:id/*'
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
    res.locals.hasEctTransfers = Object.values(participants).some((p) => p.type === 'ectTransfer')
    res.locals.hasMentors = Object.values(participants).some((p) => p.type === 'mentor')
    res.locals.hasMentorTransfers = Object.values(participants).some((p) => p.type === 'mentorTransfer')

    res.locals.hasAnyContactedParticipants = Object.values(participants).some((p) => p.status === 'Contacted' )
    res.locals.hasAnyCheckingParticipants = Object.values(participants).some((p) => p.status === 'Checking' )
    res.locals.hasAnyCheckingQTSParticipants = Object.values(participants).some((p) => p.status === 'CheckingQTS')
    res.locals.hasAnyEligibleParticipants = Object.values(participants).some((p) => p.status === 'Eligible')
    res.locals.hasAnyEligibleParticipantsCIP = Object.values(participants).some((p) => p.status === 'Eligible' && p.programme == "CIP" )
    res.locals.hasAnyTransferInParticipants = Object.values(participants).some((p) => p.status === 'TransferIn')
    res.locals.hasAnyTransferOutParticipants = Object.values(participants).some((p) => p.status === 'TransferOut')
    res.locals.hasAnyWithdrawnParticipants = Object.values(participants).some((p) => p.status === 'Withdrawn')
    res.locals.hasAnyNotEligibleParticipants = Object.values(participants).some((p) => p.status === 'NotEligible')


    res.locals.hasAnyContactedParticipantsCIP = Object.values(participants).some((p) => p.status === 'Contacted' && p.type == "ect" && p.programme == "CIP")
    res.locals.hasAnyContactedMentorParticipants = Object.values(participants).some((p) => p.status === 'Contacted' && p.type == "mentor")
    res.locals.hasAnyCheckingMentorParticipants = Object.values(participants).some((p) => p.status === 'Checking' && p.type == "mentor")
    res.locals.hasAnyCheckingQTSMentorParticipants = Object.values(participants).some((p) => p.status === 'CheckingQTS' && p.type == "mentor" )
    res.locals.hasAnyEligibleMentorParticipants = Object.values(participants).some((p) => p.status === 'Eligible' && p.type == "mentor")

    next()
  })

  router.all('/schools/participants/add', (req, res) => {
    res.redirect(`/schools/participants/${generateRandomString()}/add/who-do-you-want-to-add`)
  })


  router.all('/schools/participants/:id', (req, res) => {
    res.render('schools/participants/details')
  })


  router.all('/schools/participants/add', (req, res) => {
    res.redirect(`/schools/participants/${generateRandomString()}/add/who-do-you-want-to-add`)
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
      // `${p.name} ${p.email}`
    })
    res.locals.mentors.push({ text: 'Assign a mentor later' })
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



}
