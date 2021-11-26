const defaultSchoolName = 'Acme Primary School'
const defaultUserFullName = 'Hugo Furst'

const schoolName = process.env.SCHOOL_NAME || defaultSchoolName
const userFullName = process.env.FULL_NAME || defaultUserFullName
const userFirstName = userFullName.split(' ')[0]
const userEmailAddress = `${userFullName.toLowerCase().replace(' ', '.')}@dfe.test.gov.uk`

module.exports = {
  schoolName,
  userFullName,
  userFirstName,
  userEmailAddress,
  leadProvider: '',
  deliveryPartner: '',
  linkExpire: '12 December 2021',
  expiryTime: '1pm'
}
