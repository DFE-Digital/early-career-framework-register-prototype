const defaults = {
  schoolName: 'Acme Primary School',
  userFullName: 'Hugo Furst',
  leadProvider: 'Ambition Institute',
  deliveryPartner: 'Mega Delivery Partner'
}

const schoolName = process.env.SCHOOL_NAME || defaults.schoolName
const userFullName = process.env.FULL_NAME || defaults.userFullName
const userFirstName = userFullName.split(' ')[0]
const userEmailAddress = `${userFullName.toLowerCase().replace(' ', '.')}@dfe.test.gov.uk`
const deliveryPartner = process.env.DELIVERY_PARTNER || defaults.deliveryPartner
const leadProvider = process.env.LEAD_PROVIDER || defaults.leadProvider

module.exports = {
  schoolName,
  userFullName,
  userFirstName,
  userEmailAddress,
  leadProvider,
  deliveryPartner,
  linkExpire: '12 December 2021',
  expiryTime: '1pm'
}
