const {
  validationWizardPaths,
  validationWizardForks
} = require('../utils/teacher-or-mentor-validation-wizard-paths')

module.exports = router => {
  router.get('/teacher-or-mentor/validation/:view', function (req, res) {
    res.render(`teacher-or-mentor/validation/${req.params.view}`, { paths: validationWizardPaths(req) })
  })

  router.post([
    '/teacher-or-mentor/validation',
    '/teacher-or-mentor/validation/:view'
  ], function (req, res) {
    const fork = validationWizardForks(req)
    const paths = validationWizardPaths(req)
    fork ? res.redirect(fork) : res.redirect(paths.next)
  })
}
