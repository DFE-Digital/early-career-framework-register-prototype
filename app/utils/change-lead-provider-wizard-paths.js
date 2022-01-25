const {
  nextAndBackPaths,
  nextForkPath
} = require('../utils/wizard-helpers')

function changeLeadProviderPaths (req) {
  const paths = [
    '/support/school-cohorts',
    '/support/change-lead-provider',
    '/support/change-lead-provider/switching-guidance',
    '/support/change-lead-provider/end-partnership',
    '/support/change-lead-provider/declarations',
    '/support/change-lead-provider/new-partnership',
    '/support/change-lead-provider/who',
    '/support/change-lead-provider/tell-us-who',
    '/support/change-lead-provider/check',
    '/support/school-cohorts-confirmed'
  ]
  return nextAndBackPaths(paths, req)
}

function changeLeadProviderForks (req) {
  const forks = [
    {
      currentPath: '/support/change-lead-provider/who',
      storedData: ['admin', 'who'],
      values: ['Everyone in the 2021 cohort'],
      forkPath: '/support/change-lead-provider/check'
    }
  ]
  return nextForkPath(forks, req)
}

module.exports = {
  changeLeadProviderPaths,
  changeLeadProviderForks
}
