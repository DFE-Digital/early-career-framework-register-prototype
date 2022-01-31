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
      email: 'jane.doe@example.com',
      type: 'mentor',
      status: 'Eligible'
    },
    1235: {
      name: 'James Doe',
      email: 'james.doe@example.com',
      type: 'mentor',
      status: 'Eligible'
    },
    BCF: {
      email: "ect5@test.dfe.gov.uk",
      leadProvider: "Ambition Institute",
      mentor: "James Doe",
      name: "ECT noTRN dLP dDP notTold",
      providerPartnership: "No",
      startDate: "Spring 2022",
      status: "Contacted",
      trnKnown: "No",
      type: "ect",
      usingCurrentProgramme: "No",
      usingCurrentProvider: "No"
    },
    DN2: {
      email: "ect3@test.dfe.gov.uk",
      mentor: "James Doe",
      name: "ECT noTRN sLP dDP",
      startDate: "Spring 2022",
      status: "Contacted",
      trnKnown: "No",
      type: "ect",
      usingCurrentProgramme: "No",
      usingCurrentProvider: "Yes"
    },
    EP5: {
      dobDay: "1",
      dobMonth: "1",
      dobYear: "2222",
      email: "ect7@test.dfe.gov.uk",
      leadProvider: "Ambition Institute",
      mentor: "James Doe",
      name: "ECT TRN dLP dDP notTold",
      providerPartnership: "No",
      startDate: "Spring 2022",
      status: "Eligible",
      trnKnown: "Yes",
      trnNumber: "324234",
      type: "ect",
      usingCurrentProgramme: "No",
      usingCurrentProvider: "No"
    },
    IQ8: {
      dobDay: "12",
      dobMonth: "12",
      dobYear: "1212",
      email: "ect2@test.dfe.gov.uk",
      mentor: "Jane Doe",
      name: "ECT TRN sProg",
      startDate: "Autumn 2022",
      status: "Eligible",
      trnKnown: "Yes",
      trnNumber: "123423423",
      type: "ect",
      usingCurrentProgramme: "Yes"
    },
    PO9:  {
      email: "ect6@test.dfe.gov.uk",
      leadProvider: "Ambition Institute",
      mentor: "Jane Doe",
      name: "ECT noTRN dLP dDP Told",
      providerPartnership: "Yes",
      startDate: "Spring 2022",
      status: "Contacted",
      trnKnown: "No",
      type: "ect",
      usingCurrentProgramme: "No",
      usingCurrentProvider: "No"
    },
    VLT: {
      dobDay: "1",
      dobMonth: "1",
      dobYear: "1111",
      email: "ect4@test.dev.gov.uk",
      mentor: "James Doe",
      name: "ECT TRN sLP dDP",
      startDate: "Spring 2022",
      status: "Eligible",
      trnKnown: "Yes",
      trnNumber: "56756756",
      type: "ect",
      usingCurrentProgramme: "No",
      usingCurrentProvider: "Yes"
    },
    YZG: {
      email: "ect1@test.dfe.gov.uk",
      mentor: "James Doe",
      name: "ECT NoTRN sProg",
      startDate: "Summer 2022",
      status: "Contacted",
      trnKnown: "No",
      type: "ect",
      usingCurrentProgramme: "Yes"
    },
    Z87: {
      dobDay: "3",
      dobMonth: "3",
      dobYear: "3333",
      email: "ect8@test.dfe.gov.uk",
      leadProvider: "Teach First",
      mentor: "James Doe",
      name: "ECT TRN dLP dDP Told",
      providerPartnership: "Yes",
      startDate: "Summer 2022",
      status: "Eligible",
      trnKnown: "Yes",
      trnNumber: "3243432",
      type: "ect",
      usingCurrentProgramme: "No",
      usingCurrentProvider: "No"
    }

  }
}
