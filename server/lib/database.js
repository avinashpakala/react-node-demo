const pgpOptions = {}

const pgp = require('pg-promise')(pgpOptions)
const monitor = require('pg-monitor')

monitor.attach(pgpOptions)

//initialize connectionString
const connectionString = process.env.DATABASE_URL


const db = pgp(connectionString)

module.exports = { db, connectionString }
