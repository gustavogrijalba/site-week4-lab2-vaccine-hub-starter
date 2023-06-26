const {UnauthorizedError} = require ("../utils/errors")

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
    }
}

module.exports = User