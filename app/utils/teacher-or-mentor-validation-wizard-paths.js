const {
  nextAndBackPaths,
  nextForkPath
} = require('../utils/wizard-helpers')

function validationWizardPaths (req) {
  var paths = [
    '/teacher-or-mentor/validation/privacy-policy',
    '/teacher-or-mentor/validation/trn',
    '/teacher-or-mentor/validation/name-changed'
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
