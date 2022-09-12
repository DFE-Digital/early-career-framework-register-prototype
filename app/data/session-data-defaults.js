const defaults = {
  schoolName: 'Acme Primary School',
  sitName: 'Chris P Bacon',
  leadProvider: 'Ambition Institute',
  deliveryPartner: 'Kings College London'
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
    deliveryPartnerTransfer: "Inspire Teaching School Hub",
    leadProviderMaterials: "Teach First",
    leadProviderMaterialsTransfer: "Education Development Trust",
    linkExpire: '22 September 2022',
    expiryTime: '1pm',
    inductionProgramme: "FIP",
    fipPartnership: "Yes",
    inductionProgrammeYearTwo: "FIP",
    inductionProgrammeYearTwoECTs: "Yes",
    inductionProgrammeYearTwoProviderChange: "No",
    appropriateBodyrole: "local authority",
    appropriateBodyName: "North Tyneside",




    // rolesexplanation: "Seen",
    participants: {
        ME1: {
            role: 'Mentor',
            name: 'Jane Doe',
            inductionDay: "3", inductionMonth: "9", inductionYear: "2021",
            trnNumber: "2345528",
            dobDay: "1", dobMonth: "1", dobYear: "2001",
            email: 'jane.doe@example.com',
            usingCurrentTraining: "Yes",
            cohort: "2021",
            programme: "FIP",
            status: 'Eligible'
        },
        ME2: {
            role: 'Mentor',
            name: 'James Doe',
            inductionDay: "3", inductionMonth: "9", inductionYear: "2021",
            trnNumber: "1239044",
            dobDay: "1", dobMonth: "1", dobYear: "2001",
            email: 'james.doe@example.com',
            usingCurrentTraining: "Yes",
            cohort: "2021",
            programme: "FIP",
            status: 'Eligible'
        },
        DN2: {
            role: 'Mentor',
            name: 'Tony Headford',
            inductionDay: "1", inductionMonth: "9", inductionYear: "2021",
            trnNumber: "7564996",
            dobDay: "1", dobMonth: "1", dobYear: "2001",
            email: "noTRNsLPdDP@test.dfe.gov.uk",
            usingCurrentTraining: "Yes",
            cohort: "2021",
            programme: "FIP",
            status: "Eligible"
        },
        // CIP
        SI3: { role: "ECT", name: "Steven Woods", inductionDay: "1", inductionMonth: "9", inductionYear: "2021", dobDay: "1", dobMonth: "1", dobYear: "2001", email: "steven.woods@test.dfe.gov.uk", mentor: "Fabio Volpe", programme: "CIP", startDate: "Summer 2022", status: "Eligible", trnKnown: "Yes", trnNumber: "1231312", usingCurrentMaterials: "Yes", cohort: "2021" },
        PYE: { role: "ECT", name: "Jo Dimbleby", inductionDay: "1", inductionMonth: "9", inductionYear: "2021", dobDay: "2", dobMonth: "2", dobYear: "2002", email: "jo.dimbleby@test.dfe.gov.uk", newMaterialsSupplier: "Teach First", mentor: "Elena Bracey", programme: "CIP", startDate: "Summer 2022", status: "Eligible", trnKnown: "Yes", trnNumber: "34543654", usingCurrentMaterials: "Yes", cohort: "2021" },
        JA8: { role: 'Mentor', name: "Elena Bracey", inductionDay: "1", inductionMonth: "9", inductionYear: "2021", dobDay: "1", dobMonth: "1", dobYear: "2001", email: "elena.bracey@test.dfe.gov.uk", newMaterialsSupplier: "Teach First", programme: "CIP", startDate: "Summer 2022", status: "Eligible", trnKnown: "Yes", trnNumber: "6517984", usingCurrentMaterials: "Yes", cohort: "2021" },
        OBW: { role: 'Mentor', name: "Fabio Volpe", inductionDay: "1", inductionMonth: "9", inductionYear: "2021", dobDay: "1", dobMonth: "1", dobYear: "2001", email: "fabio.volpe@test.dfe.gov.uk", programme: "CIP", startDate: "Summer 2022", status: "Eligible", trnKnown: "Yes", trnNumber: "5647894", usingCurrentMaterials: "Yes", cohort: "2021" },

        //FIP
        PQ9: {
            role: "ECT",
            name: "Nicola Page",
            inductionDay: "11", inductionMonth: "4", inductionYear: "2022",
            dobDay: "1", dobMonth: "1", dobYear: "2222",
            trnNumber: "9998567",
            email: "nicola.page@test.dfe.gov.uk",
            newLeadProvider: "Ambition Institute",
            usingCurrentTraining: "Yes",
            cohort: "2021",
            programme: "FIP",
            status: "Withdrawn",
            mentor: "James Doe"
        },
        SD2: {
            role: "ECT",
            name: "Jack Bracewell",
            inductionDay: "3", inductionMonth: "9", inductionYear: "2021",
            trnNumber: "2332454",
            dobDay: "1", dobMonth: "1", dobYear: "2222",
            email: "jack.bracewell@test.dfe.gov.uk",
            newLeadProvider: "Ambition Institute",
            usingCurrentTraining: "No",
            usingCurrentProvider: "No",
            cohort: "2021",
            programme: "FIP",
            status: "NotEligible",
            mentor: "James Doe"
        },
        EP5: {
            role: "ECT",
            name: "Luke Didsbury",
            inductionDay: "5", inductionMonth: "9", inductionYear: "2022",
            trnNumber: "3242348",
            dobDay: "1", dobMonth: "1", dobYear: "2222",
            email: "luke.didsbury@test.dfe.gov.uk",
            usingCurrentTraining: "Yes",
            newLeadProvider: "Ambition Institute",
            cohort: "2022",
            programme: "FIP",
            status: "Eligible"
        },
        Z87: {
            role: "ECT",
            name: "Ruby Lally",
            inductionDay: "3", inductionMonth: "9", inductionYear: "2021",
            trnNumber: "3243432",
            dobDay: "3", dobMonth: "3", dobYear: "3333",
            email: "ruby.lally@test.dfe.gov.uk",
            newLeadProvider: "Teach First",
            usingCurrentTraining: "No",
            usingCurrentProvider: "No",
            cohort: "2021",
            programme: "FIP",
            status: "Eligible",
            mentor: "Tony Headford"
        },
        IQ8: {
            role: "ECT",
            name: "James Liddell",
            inductionDay: "3", inductionMonth: "9", inductionYear: "2021",
            trnNumber: "1234423",
            dobDay: "12", dobMonth: "12", dobYear: "1212",
            email: "james.liddell@test.dfe.gov.uk",
            usingCurrentTraining: "Yes",
            cohort: "2021",
            programme: "FIP",
            status: "Eligible",
            mentor: "Jane Doe"
        },
        VLT: {
            role: "ECT",
            name: "Steven Wood",
            inductionDay: "3", inductionMonth: "9", inductionYear: "2021",
            trnNumber: "5567956",
            dobDay: "1", dobMonth: "1", dobYear: "1111",
            email: "steven.wood@test.dev.gov.uk",
            usingCurrentTraining: "Yes",
            cohort: "2021",
            programme: "FIP",
            status: "Eligible",
            mentor: "James Doe"
        },
        // TranferOut Mentor
        KJ8: {
            role: "Mentor",
            name: "Kate Lloyd",
            inductionDay: "3", inductionMonth: "9", inductionYear: "2021",
            trnNumber: "3241234",
            dobDay: "1", dobMonth: "1", dobYear: "2222",
            email: "kate.lloyd@test.dfe.gov.uk",
            usingCurrentTraining: "Yes",
            newLeadProvider: "Ambition Institute",
            cohort: "2021",
            programme: "FIP",
            status: "TransferOut",
            leavingDay: "10", leavingMonth: "8", leavingYear: "2022",
        },
        // Checking with TRA
        GH3: {
            role: "ECT",
            name: "Luke Richards",
            inductionDay: "3", inductionMonth: "7", inductionYear: "2022",
            trnNumber: "7840285",
            dobDay: "1", dobMonth: "1", dobYear: "2222",
            email: "luke.richards@test.dfe.gov.uk",
            newLeadProvider: "Ambition Institute",
            usingCurrentTraining: "No",
            usingCurrentProvider: "No",
            cohort: "2021",
            programme: "FIP",
            status: "Checking"
        },
        // Checking QTS
        DB5: {
            role: "ECT",
            name: "Mili Malde",
            inductionDay: "5", inductionMonth: "7", inductionYear: "2022",
            trnNumber: "1424353",
            dobDay: "1", dobMonth: "1", dobYear: "2222",
            email: "mili.malde@test.dfe.gov.uk",
            newLeadProvider: "Ambition Institute",
            usingCurrentTraining: "No",
            usingCurrentProvider: "No",
            cohort: "2021",
            programme: "FIP",
            status: "CheckingQTS",
            mentor: "James Doe"
        },
        // Contacted
        // BCF: {
        //     role: "ECT",
        //     name: "Stanislaw Klajn",
        //     inductionDay: "1", inductionMonth: "7", inductionYear: "2022",
        //     email: "noTRNdLPdDPnotTold@test.dfe.gov.uk",
        //     newLeadProvider: "Ambition Institute",
        //     programme: "FIP",
        //     status: "Contacted",
        //     usingCurrentTraining: "No",
        //     usingCurrentProvider: "No",
        //     cohort: "2021"
        // },
        // LWM: { inductionDay: "1", inductionMonth: "7", inductionYear: "2022", email: "noTRNdLPdDPnotTold@test.dfe.gov.uk", newLeadProvider: "Ambition Institute", name: "Jo Dimbleby", programme: "FIP", startDate: "Spring 2022", status: "Contacted", trnKnown: "No", role: "Mentor", usingCurrentTraining: "No", usingCurrentProvider: "No", cohort: "2021" },
        // PO9: { role: "ECT", inductionDay: "1", inductionMonth: "9", inductionYear: "2021", email: "noTRNdLPdDPTold@test.dfe.gov.uk", newLeadProvider: "Ambition Institute", mentor: "Tony Headford", name: "Paul Hayes", programme: "FIP", startDate: "Spring 2022", status: "Eligible", trnKnown: "No", usingCurrentTraining: "No", usingCurrentProvider: "No", cohort: "2021" },
        // YZG: { role: "ECT", inductionDay: "1", inductionMonth: "9", inductionYear: "2021", email: "noTRNsProg@test.dfe.gov.uk", mentor: "James Doe", name: "Kate Thompson", programme: "FIP", startDate: "Summer 2022", status: "Eligible", trnKnown: "No", usingCurrentTraining: "Yes", cohort: "2021" },

        // TRANSFER ECT
        // Y6W: { dobDay: "1", dobMonth: "1", dobYear: "2001", email: "TR_ECT_Match@test.dfe.gov.uk", joiningDay: "1", joiningMonth: "5", joiningYear: "2023", mentor: "Jane Doe", name: "FIP TR ECT Match sameLP sameDP", programme: "FIP", status: "TransferIn", trnNumber: "8999999", role: "transfer", usingCurrentTrainingProgramme: "Yes" },
        // Z62: { dobDay: "2", dobMonth: "1", dobYear: "2002", email: "TR_ECT_Match_sLP_dDP@test.dfe.gov.uk", joiningDay: "2", joiningMonth: "5", joiningYear: "2023", mentor: "James Doe", name: "FIP TR ECT Match sameLP diffDP", programme: "FIP", status: "TransferIn", trnNumber: "34534534", role: "transfer", usingCurrentTrainingProgramme: "No", usingCurrentProvider: "Yes" },
        // LEJ: { dobDay: "5", dobMonth: "1", dobYear: "2005", email: "TR ECT Match dLP notTold@dfe.test.gov.uk", joiningDay: "5", joiningMonth: "5", joiningYear: "2023", newLeadProvider: "Teach First", mentor: "James Doe", name: "FIP TR ECT Match diffLP lpNotTold", partnershipWithProvider: "No", programme: "FIP", status: "TransferIn", trnNumber: "7688797789", role: "transfer", usingCurrentTrainingProgramme: "No", usingCurrentProvider: "No" },
        // HZ7: { dobDay: "3", dobMonth: "3", dobYear: "2003", email: "TR_ECT_Match_dLP_Told@test.dfe.gov.uk", joiningDay: "3", joiningMonth: "5", joiningYear: "2023", newLeadProvider: "Teach First", mentor: "Jane Doe", name: "FIP TR ECT Match diffLP lpTold", partnershipWithProvider: "Yes", programme: "FIP", status: "TransferIn", trnNumber: "45645645", role: "transfer", usingCurrentTrainingProgramme: "No", usingCurrentProvider: "No" },
        // YQ4: { dobDay: "1", dobMonth: "6", dobYear: "2006", email: "TRN ECT noMatch ContLP ContDP Told@test.dfe.gov.uk", joiningDay: "6", joiningMonth: "5", joiningYear: "2023", mentor: "Jane Doe", name: "FIP TR ECT noMatch ContLP ContDP lpTold", partnershipWithProvider: "Yes", programme: "FIP", status: "TransferIn", programmeMatch: "No", trnNumber: "34535334", role: "transfer", usingCurrentTrainingProgramme: "Yes" },
        // JHW: { dobDay: "1", dobMonth: "7", dobYear: "2007", email: "TRN ECT noMatch ContLP ContDP lpNotTold@dfe.test.gov.uk", joiningDay: "7", joiningMonth: "5", joiningYear: "2023", mentor: "James Doe", name: "FIP TR ECT noMatch ContLP ContDP lpNotTold", partnershipWithProvider: "No", programme: "FIP", status: "TransferIn", programmeMatch: "No", trnNumber: "78978987", role: "transfer", usingCurrentTrainingProgramme: "Yes" },
        // MAK: { dobDay: "1", dobMonth: "11", dobYear: "2011", email: "TR ECT noMatch dLP notTold@dfe.test.gov.uk", joiningDay: "11", joiningMonth: "5", joiningYear: "2023", newLeadProvider: "Best Practice Network", mentor: "Jane Doe", name: "FIP TR ECT noMatch diffLP lpNotTold", partnershipWithProvider: "No", programme: "FIP", status: "TransferIn", programmeMatch: "No", trnNumber: "56756756", role: "transfer", usingCurrentTraining: "No", usingCurrentTrainingProgramme: "No", usingCurrentProvider: "No" },
        // RWH: { dobDay: "1", dobMonth: "9", dobYear: "2009", email: "TR ECT noMatch schooLP schooDP notTold@dfe.test.gov.uk", joiningDay: "9", joiningMonth: "5", joiningYear: "2023", mentor: "Jane Doe", name: "FIP TR ECT noMatch schooLP schooDP lpNotTold", partnershipWithProvider: "No", programme: "FIP", status: "TransferIn", programmeMatch: "No", trnNumber: "44545454", role: "transfer", usingCurrentTraining: "Yes", usingCurrentTrainingProgramme: "No" },
        // VBI: { dobDay: "8", dobMonth: "8", dobYear: "2008", email: "TR ECT noMatch schooLP schooDP told@dfe.test.gov.uk", joiningDay: "8", joiningMonth: "5", joiningYear: "2023", mentor: "James Doe", name: "FIP TR ECT noMatch schooLP schooDP lpTold", partnershipWithProvider: "Yes", programme: "FIP", status: "TransferIn", programmeMatch: "No", trnNumber: "1231323", role: "transfer", usingCurrentTraining: "Yes", usingCurrentTrainingProgramme: "No" },
        // GDS: { dobDay: "1", dobMonth: "10", dobYear: "2010", email: "TR ECT noMatch schooLP schooDP notTold@test.dfe.gov.uk", joiningDay: "10", joiningMonth: "5", joiningYear: "2023", newLeadProvider: "Best Practice Network", mentor: "James Doe", name: "Brian Coult", partnershipWithProvider: "Yes", programme: "FIP", status: "TransferIn", programmeMatch: "No", trnNumber: "345435345", role: "transfer", usingCurrentTraining: "No", usingCurrentTrainingProgramme: "No", usingCurrentProvider: "No" },



        // TRANSFER CIP
        // ZZL: { dobDay: "12", dobMonth: "12", dobYear: "2012", email: "CIP TR ECT noMatch schooProg@test.dfe.gov.uk", joiningDay: "4", joiningMonth: "6", joiningYear: "2023", mentor: "Jane Doe", name: "CIP TR ECT noMatch schooProg", programme: "CIP", status: "TransferIn", programmeMatch: "No", trnNumber: "45645753", role: "transfer", usingCurrentMaterials: "Yes", usingCurrentTrainingMaterials: "No" },
        // RSD: { dobDay: "12", dobMonth: "3", dobYear: "1988", email: "CIP TR ECT noMatch contProg@test.dfe.gov.uk", joiningDay: "6", joiningMonth: "8", joiningYear: "2023", mentor: "FIP Jane Doe", name: "CIP TR ECT noMatch contProg", programme: "CIP", status: "TransferIn", programmeMatch: "No", trnNumber: "567567567", role: "transfer", usingCurrentTrainingMaterials: "Yes" },
        // ADC: { dobDay: "23", dobMonth: "12", dobYear: "1900", email: "CIP TR ECT dProg@test.dfe.gov.uk", joiningDay: "12", joiningMonth: "6", joiningYear: "2023", newMaterialsSupplier: "Education Development Trust", mentor: "FIP James Doe", name: "CIP TR ECT Match dProg", programme: "CIP", status: "TransferIn", trnNumber: "3453453", role: "transfer", usingCurrentTrainingMaterials: "No" },
        // LLK: { dobDay: "1", dobMonth: "1", dobYear: "1990", email: "CIP TR ECT sProg@test.dfe.gov.uk", joiningDay: "6", joiningMonth: "4", joiningYear: "2023", mentor: "FIP James Doe", name: "CIP TR ECT Match sProg", programme: "CIP", status: "TransferIn", trnNumber: "56756756", role: "transfer", usingCurrentTrainingMaterials: "Yes" }


    },
    schools: {
        SC1: { name: '16-19 Abingdon ', localAuthority: 'Oxfordshire', urn: '133226' },
        SC2: { name: '3 Dimensions', localAuthority: "Somerset", urn: '134909' },
        SC3: { name: 'Abberley Hall', localAuthority: "Worcestershire", urn: '117011' },
        SC4: { name: 'Ashley Primary School', localAuthority: "South Tyneside", localTrust: "South Tyneside", urn: '108685', inductionEmail: 'jmccormick@ashley.s-tyneside.sch.uk', inductionName: 'Joanne McCormick', programme: 'DfE-approved training provider', deliveryPartner: 'Mega Delivery Partner', leadProvider: 'Ambition Institute' },
        SC5: { name: 'Easingwold Community Primary School', localAuthority: "North Yorkshire", urn: '121331', inductionEmail: 'headteacher@easingwold-pri.n-yorks.sch.uk', inductionName: 'Alison Cottrell' },
        SC6: { name: 'Gosforth Academy', localAuthority: "Newcastle upon Tyne", urn: '136352', inductionEmail: 'suzanne.pringle@ga.newcastle.sch.uk', inductionName: 'Suzanne Pringle' },
        SC7: { name: 'Huntington School', localAuthority: "York", urn: '121673', inductionEmail: 'a.talbot@huntington-ed.org.uk', inductionName: 'Alister Talbot' },
        SC8: { name: 'Ponteland Primary School', localAuthority: "Northumberland", urn: '145780', inductionEmail: 'm.warland@ponthigh.org.uk', inductionName: 'Mark Warland' },
        SC9: { name: 'Westmoor Primary School', localAuthority: "North Tyneside	", urn: '108582' },
    },




}
