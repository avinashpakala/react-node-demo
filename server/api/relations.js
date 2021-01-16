const express = require('express')
const router = express.Router()

const { db } = require('../lib/database')

router.get('/api/relations', (req, res, next) => {
  db
    .any('select * from relations')
    .then(data => {
      res.json(`${req.path} fetched ${JSON.stringify(data)} from the database`)
    })
    .catch(next)
})

module.exports = router
