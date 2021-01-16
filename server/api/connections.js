const express = require('express')
const router = express.Router()

const { db } = require('../lib/database')

router.get('/api/connections', (req, res, next) => {
  db
    .any('select * from connections')
    .then(data => {
      res.json(`${req.path} fetched ${JSON.stringify(data)} from the database`)
    })
    .catch(next)
})

module.exports = router
