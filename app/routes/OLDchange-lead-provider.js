const {
  changeLeadProviderPaths,
  changeLeadProviderForks
} = require('../utils/change-lead-provider-wizard-paths')

module.exports = router => {
  router.get('/support/change-lead-provider', (req, res) => {
    res.render('support/change-lead-provider/index', { paths: changeLeadProviderPaths(req) })
  })

  router.get('/support/change-lead-provider/:view', (req, res) => {
    res.render(`support/change-lead-provider/${req.params.view}`, { paths: changeLeadProviderPaths(req) })
  })

  router.post([
    '/support/change-lead-provider',
    '/support/change-lead-provider/:view'
  ], function (req, res) {
    const fork = changeLeadProviderForks(req)
    const paths = changeLeadProviderPaths(req)
    fork ? res.redirect(fork) : res.redirect(paths.next)
  })
}
