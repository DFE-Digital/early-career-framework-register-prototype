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

  router.all('/participants/start', (req, res) => {
    res.redirect(`/participants/${generateRandomString()}/details`)
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

  router.all('/schools/participants/:id/add/transfer/:view', (req, res) => {
    res.render(`schools/participants/add/transfer/${req.params.view}`)
  })

  router.all('/participants/:id', (req, res) => {
    res.render('participants/details')
  })

  router.all('/participants/:id/:view', (req, res) => {
    res.render(`participants/${req.params.view}`)
  })
}
