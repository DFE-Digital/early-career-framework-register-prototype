const express = require('express')
const router = express.Router()

// require('./routes/change-lead-provider')(router)

// Add your routes here - above the module.exports line
require('./routes/participants')(router)
require('./routes/schools')(router)

require('./routes/participants_prelive')(router)
require('./routes/schools_prelive')(router)

module.exports = router
