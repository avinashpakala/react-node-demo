const express = require('express')
const router = express.Router()

const { db } = require('../lib/database')

const query = `
select * from users;
`;

router.get('/api/users', (req, res, next) => {
  db
    .any(query) 
    .then(data => {
      res.json(`${req.path} fetched ${JSON.stringify(data)} from the database`)
    })
    .catch(next)
})

module.exports = router
