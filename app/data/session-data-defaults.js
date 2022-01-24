const defaults = {
  schoolName: 'Acme Primary School',
  sitName: 'Michael Jordan',
  leadProvider: 'UCL Institute of Education',
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
  leadProviderTransfer: "Teach First",
  inductionStart: 'Spring 2022',
  linkExpire: '12 February 2022',
  expiryTime: '1pm',
  participants: {
    1234: {
      name: 'Jane Doe',
      email: 'jane.doe@example.com'
    },
    1235: {
      name: 'James Doe',
      email: 'james.doe@example.com'
    },
    6745: {
      name: 'Jimmy Doe',
      email: 'jimmy.doe@example.com'
    }
  }
}
