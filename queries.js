const database = require('./database-connection')
const Tesseract = require("tesseract.js")

module.exports = {
    getAllMatches(){
        return database('ocrmatches')
    },
    async createNewMatch(path, lang){
       await Tesseract.recognize(
            path,
            lang,
            { logger: m => console.log(m) }
            ).then(({ data: { words } }) => {
                let result = {"matches" : words[0].block.text.substr(0,200)}
                return database('ocrmatches').insert(result)
            })
    }
}