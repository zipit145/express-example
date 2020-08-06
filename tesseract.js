const Tesseract = require("tesseract.js")
let result = "no result yet!"
 

Tesseract.recognize(
    'https://tesseract.projectnaptha.com/img/eng_bw.png',
    'eng',
    { logger: m => console.log(m) }
    ).then(({ data: { words } }) => {
    let result;
    console.log(words);
    result = words;
    exports.result = result;
})


exports.result = result;

  