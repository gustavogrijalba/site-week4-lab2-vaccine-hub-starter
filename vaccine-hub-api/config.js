require("dotenv").config()
require("colors")
const bcrypt = require('bcrypt')

const PORT = process.env.PORT ? Number(process.env.PORT) : 3001

function getDatabaseUri () {
    const dbUser = process.env.DATABASE_USER || "postgres"
    const dbPass = process.env.DATABASE_PASS ? encodeURI(process.env.DATABASE_PASS) : "postgres"
    const dbHost = process.env.DATABASE_HOST || "localhost"
    const dbPort = process.env.DATABASE_PORT || 5432
    const dbName = process.env.DATABASE_NAME || "vaccine_hub"

    return process.env.DATABASE_URL || `postgressql://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}`
}

console.log('Vaccine Hub Config' .green)
console.log('PORT: ' .blue, PORT)
console.log('Database Url: ' .blue, getDatabaseUri())
console.log("----")

module.exports = {
    PORT,
    getDatabaseUri
}