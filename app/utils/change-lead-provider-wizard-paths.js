const {
  nextAndBackPaths,
  nextForkPath
} = require('../utils/wizard-helpers')

function changeLeadProviderPaths (req) {
  const paths = []
  return nextAndBackPaths(paths, req)
}

function changeLeadProviderForks (req) {
  const forks = []
  return nextForkPath(forks, req)
}

module.exports = {
  changeLeadProviderPaths,
  changeLeadProviderForks
}
