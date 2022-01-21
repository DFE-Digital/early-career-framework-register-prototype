const defaults = {
  schoolName: 'Acme Primary School',
  sitName: 'Michael Jordan',
  leadProvider: 'Education Development Trust',
  deliveryPartner: 'South Central Teaching School Hub'  
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
  inductionStart: 'Spring 2022',
  linkExpire: '12 February 2022',
  expiryTime: '1pm'
}
