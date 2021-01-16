const express = require('express')
const router = express.Router()

const { db } = require('../lib/database')

const startID = 1, endID = 5 ;

const query = `
WITH RECURSIVE ctename AS (
    SELECT userID,relationID,otheruserID,userID AS startID,userID || '->' || otherUserID AS path 
    from connections 
    where userID =1 
    UNION ALL
    SELECT connections.userID, connections.relationID,connections.otherUserID,ctename.startID,ctename.path || '->'|| connections.otherUserID 
    from connections 
      join  ctename on connections.userID = ctename.otherUserID 
      )
select startID, otherUserID AS destinationID, path from ctename where ctename.otherUserID = 5 AND ctename.startID = 1  
`;


router.get('/api/degree', (req, res, next) => {
  db
    .any(
      query
).then(data => {
      res.json(`${req.path} fetched ${JSON.stringify(data)} from the database`)
    })
    .catch(next)
})

module.exports = router
