const {BadRequestError, UnauthorizedError} = require ("../utils/errors")
const db = require("../db")

class User {
    static async login(credentials) {
        //takes in login credentials as an obect of username and password
        //throw an error if any fields are missing 
        //check the db for the user, and if they are found compare password with
        //inputted credential, if match return user

        //error if no match/any error occurs
        throw new UnauthorizedError("Invalid email/password combo")
    }


    static async register(credentials) {
        //user inputs email, pw, date, fname, lname, location, date
        //if any fields are missing throw an error
        //make sure no user already exists for email, throw error if already found
        //create a new user object in the db with those credentials
        //return user
        const requiredFields = ["email", "password", "first_name", "last_name", "location", "date"]

        requiredFields.forEach(field => {
            if (!credentials.hasOwnProperty(field)) {
                throw new BadRequestError(`Missing ${field} in request body`)
            }
        })

        // console.log("here2")
        const existingUser = await User.fetchUserByEmail(credentials.email)
        if (existingUser) {
            throw new BadRequestError(`Duplicate email: ${credentials.email}`)
        }

        const lowercasedEmail = credentials.email.toLowerCase()
        console.log("here2")
        const result = await db.query(`
        INSERT INTO users (
            email,
            password,
            first_name,
            last_name,
            location,
            date
            )
            VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING id, email, first_name, last_name, location, date;
            `, [lowercasedEmail, credentials.password, credentials.first_name, credentials.last_name, credentials.location, credentials.date]
        )

        const user = result.rows[0]

        return user
    }

    static async fetchUserByEmail(email) {
        if (!email) {
            throw new BadRequestError("No email provided")
        }

        const query = `SELECT * FROM users WHERE email = $1`

        const result = await db.query(query, [email.toLowerCase()])

        const user = result.rows[0]

        return user 
    }
}

module.exports = User