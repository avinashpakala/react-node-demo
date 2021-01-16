const express = require('express')
const router = express.Router()

router.use(require('./connections'))
router.use(require('./users'))
router.use(require('./relations'))
router.use(require('./degree'))

module.exports = router
