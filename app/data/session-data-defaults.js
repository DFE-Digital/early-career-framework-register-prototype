/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sarah Philips",

"options-chosen": [ "foo", "bar" ]

============================================================================

*/

module.exports = {
  schoolName: 'One Sixth Form College',
  userFullName: 'Kate Sida',
  userFirstName: 'Kate',
  leadProvider: 'Ambition Institute',
  deliveryPartner: 'Unity Schools Partnership',
  userEmailAddress: 'Kate.Sida@dfe.test.gov.uk',
  linkExpire: '26 November 2021',
  expiryTime: '1pm'
}
