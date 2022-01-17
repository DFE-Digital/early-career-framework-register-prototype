const { generateRandomString } = require('../utils/helpers')

module.exports = router => {
  router.all([
    '/participants/:id',
    '/participants/:id/*'
  ], (req, res, next) => {
    const data = req.session.data
    res.locals.id = req.params.id
    res.locals.participant = data.participants && data.participants[req.params.id]
    next()
  })

  router.all('/participants/start', (req, res) => {
    res.redirect(`/participants/${generateRandomString()}/details`)
  })

  router.all('/participants/:id', (req, res) => {
    res.render('participants/details')
  })

  router.all('/participants/:id/:view', (req, res) => {
    res.render(`participants/${req.params.view}`)
  })
}
