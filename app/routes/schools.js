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
        const school = req.session.data.schools
        next()
    })

    // Schools overview
    router.all('/support/schools/:id/overview', (req, res) => {
        res.render('support/schools/overview')
    })
    router.all('/support/schools/:id/overview/:view', (req, res) => {
        res.render(`support/schools/overview/${req.params.view}`)
    })

    // Schools participants
    router.all('/support/schools/:id/participants', (req, res) => {
        res.render('support/schools/participants')
    })
    router.all('/support/schools/:id/participants/:view', (req, res) => {
        res.render(`support/schools/participants/${req.params.view}`)
    })

    // Schools cohorts
    router.all('/support/schools/:id/cohorts', (req, res) => {
        res.render('support/schools/cohorts')
    })
    router.all('/support/schools/:id/cohorts/:view', (req, res) => {
        res.render(`support/schools/cohorts/${req.params.view}`)
    })


    // Lead provider change
    router.all('/support/schools/:id/change-lead-provider', (req, res) => {
        res.render('support/schools/change-lead-provider/why-are-you-changing')
    })
    router.all('/support/schools/:id/change-lead-provider/:view', (req, res) => {
        res.render(`support/schools/change-lead-provider/${req.params.view}`)
    })




}
