const pgpOptions = {}

const pgp = require('pg-promise')(pgpOptions)
const monitor = require('pg-monitor')

monitor.attach(pgpOptions)

//initialize connectionString
const connectionString = "postgres://rpprmquidwxsrf:d127584b59b71cbede81aafee4a8185dce1b33f09e6bc3c964478232fa5e7df1@ec2-18-235-107-171.compute-1.amazonaws.com:5432/ddls7rgkh9tse8?ssl=true"


const db = pgp(connectionString)

module.exports = { db, connectionString }
