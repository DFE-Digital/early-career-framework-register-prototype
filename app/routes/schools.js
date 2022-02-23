const { generateRandomString } = require('../utils/helpers')

module.exports = router => {
  router.all([
    '/support/schools/:id',
    '/support/schools/:id/*'
  ], (req, res, next) => {
    const data = req.session.data
    res.locals.id = req.params.id
    res.locals.school = data.schools && data.schools[req.params.id]
    next()
  })

  router.all('/support/schools', (req, res, next) => {
    const participants = req.session.data.schools
    next()
  })

  router.all('/support/schools/add', (req, res) => {
    res.redirect(`/support/schools/${generateRandomString()}/index`)
  })

  router.all('/supports/schools/:id', (req, res) => {
    res.render('support/schools/index')
  })


}
