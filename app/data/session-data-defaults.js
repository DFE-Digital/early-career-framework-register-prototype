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
  schoolName: 'Burnside College',
  userFullName: 'Helen Addison',
  userFirstName: 'Helen',
  leadProvider: '',
  deliveryPartner: '',
  userEmailAddress: 'Mari.Josephine.Chivers@dfe.test.gov.uk',
  linkExpire: '23 November 2021',
  expiryTime: '1pm'
}
