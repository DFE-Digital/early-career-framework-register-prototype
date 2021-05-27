const {
  nextAndBackPaths,
  nextForkPath
} = require('../utils/wizard-helpers')

function validationWizardPaths (req) {
  var paths = [
    '/teacher-or-mentor/validation/privacy-policy',
    '/teacher-or-mentor/validation/qualified-check',
    '/teacher-or-mentor/validation/trn',
    '/teacher-or-mentor/validation/name-changed',
    '/teacher-or-mentor/validation/name-updated',
    '/teacher-or-mentor/validation/details',
    '/teacher-or-mentor/validation/check',
    '/teacher-or-mentor/validation/confirmation'
  ]
  return nextAndBackPaths(paths, req)
}

function validationWizardForks (req) {
  var forks = []
  return nextForkPath(forks, req)
}

module.exports = {
  validationWizardPaths,
  validationWizardForks
}
