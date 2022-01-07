const defaults = {
  schoolName: 'Acme Primary School',
  sitName: 'Michael Jordan',
  leadProvider: 'Education Development Trust',
  deliveryPartner: 'Mega Delivery Partner'
}

const schoolName = process.env.SCHOOL_NAME || defaults.schoolName
const sitName = process.env.FULL_NAME || defaults.sitName
const sitFirstName = sitName.split(' ')[0]
const sitEmail = `${sitName.toLowerCase().replace(' ', '.')}@dfe.test.gov.uk`
const deliveryPartner = process.env.DELIVERY_PARTNER || defaults.deliveryPartner
const leadProvider = process.env.LEAD_PROVIDER || defaults.leadProvider

module.exports = {
  schoolName,
  sitName,
  sitFirstName,
  sitEmail,
  leadProvider,
  deliveryPartner,
  linkExpire: '12 December 2021',
  expiryTime: '1pm'
}
