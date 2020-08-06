const database = require('./database-connection')

module.exports = {
    getAllMatches(){
        return database('ocrmatches')
    },
    createNewMatch(newMatch){
        return database('ocrmatches').insert(newMatch).returning('*')
    }
}