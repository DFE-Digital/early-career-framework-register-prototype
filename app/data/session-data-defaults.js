const defaults = {
  schoolName: 'Acme Primary School',
  sitName: 'Chris P Bacon',
  leadProvider: 'Ambition Institute',
  deliveryPartner: 'GLF Schools'
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
    deliveryPartnerTransfer: "United Learning",
    leadProviderMaterials: "Ambition Institue",
    leadProviderMaterialsTransfer: "Education Development Trust",
    inductionStart: 'Spring 2022',
    linkExpire: '28 February 2022',
    expiryTime: '1pm',
    inductionProgramme: "FIP",
    fipPartnership: "Yes",
    // rolesexplanation: "Seen",
    participants: {
        1234: { name: 'Jane Doe', email: 'jane.doe@example.com', type: 'mentor', programme: "CIP", status: 'Eligible', programme: "FIP", startDate: "Autumn 2021" },
        1235: { name: 'James Doe', email: 'james.doe@example.com', programme: "FIP", type: 'mentor', status: 'Eligible', programme: "FIP", startDate: "Autumn 2021", },

        // CIP
        SI3: { dobDay: "1", dobMonth: "1", dobYear: "2001", email: "CIP ECT TRN sMaterials@test.dfe.gov.uk", mentor: "FIP Jane Doe", name: "CIP ECT TRN sMaterials", programme: "CIP", startDate: "Summer 2022", status: "Eligible", trnKnown: "Yes", trnNumber: "1231312", type: "ect", usingCurrentMaterials: "Yes" },
        PYE: { dobDay: "2", dobMonth: "2", dobYear: "2002", email: "CIP ECT TRN dMaterials@test.dfe.gov.uk", newMaterialsSupplier: "Teach First", mentor: "FIP James Doe", name: "CIP ECT TRN dMaterials", programme: "CIP", startDate: "Summer 2022", status: "Eligible", trnKnown: "Yes", trnNumber: "34543654", type: "ect", usingCurrentMaterials: "No" },
        JA8: { email: "CIP ECT noTRN dMaterials@test.dfe.gov.uk", newMaterialsSupplier: "Teach First", mentor: "Jane Doe", name: "CIP ECT noTRN dMaterials", programme: "CIP", startDate: "Summer 2022", status: "Contacted", trnKnown: "No", type: "ect", usingCurrentMaterials: "No" },
        OBW: { email: "CIP ECT noTRN sMaterials@test.dfe.gov.uk", mentor: "Jane Doe", name: "CIP ECT noTRN sMaterials", programme: "CIP", startDate: "Summer 2022", status: "Contacted", trnKnown: "No", type: "ect", usingCurrentMaterials: "Yes" },

        //FIP
        PQ9: { dobDay: "1", dobMonth: "1", dobYear: "2222", email: "nicola.page@test.dfe.gov.uk", newLeadProvider: "Ambition Institute", mentor: "James Doe", name: "Nicola Page", partnershipWithProvider: "No", programme: "FIP", startDate: "Autumn 2021", status: "Withdrawn", trnKnown: "Yes", trnNumber: "9998567", type: "ect", usingCurrentTraining: "No", usingCurrentProvider: "No" },
        SD2: { dobDay: "1", dobMonth: "1", dobYear: "2222", email: "jack.bracewell@test.dfe.gov.uk", newLeadProvider: "Ambition Institute", mentor: "James Doe", name: "Jack Bracewell", partnershipWithProvider: "No", programme: "FIP", startDate: "Spring 2022", status: "NotEligible", trnKnown: "Yes", trnNumber: "2332454", type: "ect", usingCurrentTraining: "No", usingCurrentProvider: "No" },
        EP5: { dobDay: "1", dobMonth: "1", dobYear: "2222", email: "luke.didsbury@test.dfe.gov.uk", newLeadProvider: "Ambition Institute", mentor: "James Doe", name: "Luke Didsbury", partnershipWithProvider: "No", programme: "FIP", startDate: "Spring 2022", status: "Eligible", trnKnown: "Yes", trnNumber: "324234", type: "ect", usingCurrentTraining: "No", usingCurrentProvider: "No" },
        Z87: { dobDay: "3", dobMonth: "3", dobYear: "3333", email: "ruby.lally@test.dfe.gov.uk", newLeadProvider: "Teach First", mentor: "James Doe", name: "Ruby Lally", partnershipWithProvider: "Yes", programme: "FIP", startDate: "Autumn 2021", status: "Eligible", trnKnown: "Yes", trnNumber: "3243432", type: "ect", usingCurrentTraining: "No", usingCurrentProvider: "No" },
        IQ8: { dobDay: "12", dobMonth: "12", dobYear: "1212", email: "james.liddell@test.dfe.gov.uk", mentor: "Jane Doe", name: "James Liddell", programme: "FIP", startDate: "Spring 2022", status: "Eligible", trnKnown: "Yes", trnNumber: "123423423", type: "ect", usingCurrentTraining: "Yes" },
        VLT: { dobDay: "1", dobMonth: "1", dobYear: "1111", email: "steven.wood@test.dev.gov.uk", mentor: "James Doe", name: "Steven Wood", programme: "FIP", startDate: "Autumn 2021", status: "Eligible", trnKnown: "Yes", trnNumber: "56756756", type: "ect", usingCurrentTraining: "No", usingCurrentProvider: "Yes" },
        // TranferOut Mentor
        KJ8: { dobDay: "1", dobMonth: "1", dobYear: "2222", email: "kate.lloyd@test.dfe.gov.uk", newLeadProvider: "Ambition Institute",  name: "Kate Lloyd", partnershipWithProvider: "No", programme: "FIP", startDate: "Autumn 2021", status: "TransferOut", trnKnown: "Yes", trnNumber: "324234", type: "mentor", usingCurrentTraining: "No", usingCurrentProvider: "No", leavingDay: "10", leavingMonth: "4", leavingYear: "2023" },
        // Checking with TRA
        GH3: { dobDay: "1", dobMonth: "1", dobYear: "2222", email: "luke.richards@test.dfe.gov.uk", newLeadProvider: "Ambition Institute", mentor: "James Doe", name: "Luke Richards", partnershipWithProvider: "No", programme: "FIP", startDate: "Spring 2022", status: "Checking", trnKnown: "Yes", trnNumber: "78402875", type: "ect", usingCurrentTraining: "No", usingCurrentProvider: "No" },
        // Checking QTS
        DB5: { dobDay: "1", dobMonth: "1", dobYear: "2222", email: "mili.malde@test.dfe.gov.uk", newLeadProvider: "Ambition Institute", mentor: "James Doe", name: "Mili Malde", partnershipWithProvider: "No", programme: "FIP", startDate: "Spring 2022", status: "CheckingQTS", trnKnown: "Yes", trnNumber: "1424353", type: "ect", usingCurrentTraining: "No", usingCurrentProvider: "No" },
        // Contacted
        BCF: { email: "noTRNdLPdDPnotTold@test.dfe.gov.uk", newLeadProvider: "Ambition Institute", mentor: "James Doe", name: "Stanislaw Klajn", partnershipWithProvider: "No", programme: "FIP", startDate: "Spring 2022", status: "Contacted", trnKnown: "No", type: "ect", usingCurrentTraining: "No", usingCurrentProvider: "No" },
        DN2: { email: "noTRNsLPdDP@test.dfe.gov.uk", mentor: "James Doe", name: "Tony Headford", programme: "FIP", startDate: "Spring 2022", status: "Contacted", trnKnown: "No", type: "ect", usingCurrentTraining: "No", usingCurrentProvider: "Yes" },
        PO9:  { email: "noTRNdLPdDPTold@test.dfe.gov.uk", newLeadProvider: "Ambition Institute", mentor: "Jane Doe", name: "Paul Hayes", partnershipWithProvider: "Yes", programme: "FIP", startDate: "Spring 2022", status: "Contacted", trnKnown: "No", type: "ect", usingCurrentTraining: "No", usingCurrentProvider: "No" },
        YZG: { email: "noTRNsProg@test.dfe.gov.uk", mentor: "James Doe", name: "Kate Thompson", programme: "FIP", startDate: "Summer 2022", status: "Contacted", trnKnown: "No", type: "ect", usingCurrentTraining: "Yes" },

        // TRANSFER ECT
        // Y6W: { dobDay: "1", dobMonth: "1", dobYear: "2001", email: "TR_ECT_Match@test.dfe.gov.uk", joiningDay: "1", joiningMonth: "5", joiningYear: "2023", mentor: "Jane Doe", name: "FIP TR ECT Match sameLP sameDP", programme: "FIP", status: "TransferIn", trnNumber: "8999999", type: "ectTransfer", usingCurrentTrainingProgramme: "Yes" },
        // Z62: { dobDay: "2", dobMonth: "1", dobYear: "2002", email: "TR_ECT_Match_sLP_dDP@test.dfe.gov.uk", joiningDay: "2", joiningMonth: "5", joiningYear: "2023", mentor: "James Doe", name: "FIP TR ECT Match sameLP diffDP", programme: "FIP", status: "TransferIn", trnNumber: "34534534", type: "ectTransfer", usingCurrentTrainingProgramme: "No", usingCurrentProvider: "Yes" },
        // LEJ: { dobDay: "5", dobMonth: "1", dobYear: "2005", email: "TR ECT Match dLP notTold@dfe.test.gov.uk", joiningDay: "5", joiningMonth: "5", joiningYear: "2023", newLeadProvider: "Teach First", mentor: "James Doe", name: "FIP TR ECT Match diffLP lpNotTold", partnershipWithProvider: "No", programme: "FIP", status: "TransferIn", trnNumber: "7688797789", type: "ectTransfer", usingCurrentTrainingProgramme: "No", usingCurrentProvider: "No" },
        // HZ7: { dobDay: "3", dobMonth: "3", dobYear: "2003", email: "TR_ECT_Match_dLP_Told@test.dfe.gov.uk", joiningDay: "3", joiningMonth: "5", joiningYear: "2023", newLeadProvider: "Teach First", mentor: "Jane Doe", name: "FIP TR ECT Match diffLP lpTold", partnershipWithProvider: "Yes", programme: "FIP", status: "TransferIn", trnNumber: "45645645", type: "ectTransfer", usingCurrentTrainingProgramme: "No", usingCurrentProvider: "No" },
        // YQ4: { dobDay: "1", dobMonth: "6", dobYear: "2006", email: "TRN ECT noMatch ContLP ContDP Told@test.dfe.gov.uk", joiningDay: "6", joiningMonth: "5", joiningYear: "2023", mentor: "Jane Doe", name: "FIP TR ECT noMatch ContLP ContDP lpTold", partnershipWithProvider: "Yes", programme: "FIP", status: "TransferIn", programmeMatch: "No", trnNumber: "34535334", type: "ectTransfer", usingCurrentTrainingProgramme: "Yes" },
        // JHW: { dobDay: "1", dobMonth: "7", dobYear: "2007", email: "TRN ECT noMatch ContLP ContDP lpNotTold@dfe.test.gov.uk", joiningDay: "7", joiningMonth: "5", joiningYear: "2023", mentor: "James Doe", name: "FIP TR ECT noMatch ContLP ContDP lpNotTold", partnershipWithProvider: "No", programme: "FIP", status: "TransferIn", programmeMatch: "No", trnNumber: "78978987", type: "ectTransfer", usingCurrentTrainingProgramme: "Yes" },
        // MAK: { dobDay: "1", dobMonth: "11", dobYear: "2011", email: "TR ECT noMatch dLP notTold@dfe.test.gov.uk", joiningDay: "11", joiningMonth: "5", joiningYear: "2023", newLeadProvider: "Best Practice Network", mentor: "Jane Doe", name: "FIP TR ECT noMatch diffLP lpNotTold", partnershipWithProvider: "No", programme: "FIP", status: "TransferIn", programmeMatch: "No", trnNumber: "56756756", type: "ectTransfer", usingCurrentTraining: "No", usingCurrentTrainingProgramme: "No", usingCurrentProvider: "No" },
        // RWH: { dobDay: "1", dobMonth: "9", dobYear: "2009", email: "TR ECT noMatch schooLP schooDP notTold@dfe.test.gov.uk", joiningDay: "9", joiningMonth: "5", joiningYear: "2023", mentor: "Jane Doe", name: "FIP TR ECT noMatch schooLP schooDP lpNotTold", partnershipWithProvider: "No", programme: "FIP", status: "TransferIn", programmeMatch: "No", trnNumber: "44545454", type: "ectTransfer", usingCurrentTraining: "Yes", usingCurrentTrainingProgramme: "No" },
        // VBI: { dobDay: "8", dobMonth: "8", dobYear: "2008", email: "TR ECT noMatch schooLP schooDP told@dfe.test.gov.uk", joiningDay: "8", joiningMonth: "5", joiningYear: "2023", mentor: "James Doe", name: "FIP TR ECT noMatch schooLP schooDP lpTold", partnershipWithProvider: "Yes", programme: "FIP", status: "TransferIn", programmeMatch: "No", trnNumber: "1231323", type: "ectTransfer", usingCurrentTraining: "Yes", usingCurrentTrainingProgramme: "No" },
        // GDS: { dobDay: "1", dobMonth: "10", dobYear: "2010", email: "TR ECT noMatch schooLP schooDP notTold@test.dfe.gov.uk", joiningDay: "10", joiningMonth: "5", joiningYear: "2023", newLeadProvider: "Best Practice Network", mentor: "James Doe", name: "Brian Coult", partnershipWithProvider: "Yes", programme: "FIP", status: "TransferIn", programmeMatch: "No", trnNumber: "345435345", type: "ectTransfer", usingCurrentTraining: "No", usingCurrentTrainingProgramme: "No", usingCurrentProvider: "No" },



        // TRANSFER CIP
        // ZZL: { dobDay: "12", dobMonth: "12", dobYear: "2012", email: "CIP TR ECT noMatch schooProg@test.dfe.gov.uk", joiningDay: "4", joiningMonth: "6", joiningYear: "2023", mentor: "Jane Doe", name: "CIP TR ECT noMatch schooProg", programme: "CIP", status: "TransferIn", programmeMatch: "No", trnNumber: "45645753", type: "ectTransfer", usingCurrentMaterials: "Yes", usingCurrentTrainingMaterials: "No" },
        // RSD: { dobDay: "12", dobMonth: "3", dobYear: "1988", email: "CIP TR ECT noMatch contProg@test.dfe.gov.uk", joiningDay: "6", joiningMonth: "8", joiningYear: "2023", mentor: "FIP Jane Doe", name: "CIP TR ECT noMatch contProg", programme: "CIP", status: "TransferIn", programmeMatch: "No", trnNumber: "567567567", type: "ectTransfer", usingCurrentTrainingMaterials: "Yes" },
        // ADC: { dobDay: "23", dobMonth: "12", dobYear: "1900", email: "CIP TR ECT dProg@test.dfe.gov.uk", joiningDay: "12", joiningMonth: "6", joiningYear: "2023", newMaterialsSupplier: "Education Development Trust", mentor: "FIP James Doe", name: "CIP TR ECT Match dProg", programme: "CIP", status: "TransferIn", trnNumber: "3453453", type: "ectTransfer", usingCurrentTrainingMaterials: "No" },
        // LLK: { dobDay: "1", dobMonth: "1", dobYear: "1990", email: "CIP TR ECT sProg@test.dfe.gov.uk", joiningDay: "6", joiningMonth: "4", joiningYear: "2023", mentor: "FIP James Doe", name: "CIP TR ECT Match sProg", programme: "CIP", status: "TransferIn", trnNumber: "56756756", type: "ectTransfer", usingCurrentTrainingMaterials: "Yes" }


    }
}
