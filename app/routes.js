const express = require('express')
const router = express.Router()

require('./routes/change-lead-provider')(router)

// Add your routes here - above the module.exports line
require('./routes/participants')(router)

require('./routes/schools')(router)


module.exports = router
