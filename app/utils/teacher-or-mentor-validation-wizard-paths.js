const {
  nextAndBackPaths,
  nextForkPath
} = require('../utils/wizard-helpers')

function validationWizardPaths (req) {
  var paths = []
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
