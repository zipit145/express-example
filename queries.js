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
            let result;
            console.log(words);
            result = words;
            exports.result = result;
        })
    }
}