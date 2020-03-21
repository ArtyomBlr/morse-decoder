const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const PATTERN = /........../g;
    const numberTen = /10/g;
    const numberEleven = /11/g;
    const numberZero = /00/g;
    const space = /\*........./g;
 
    let arr = expr.match(PATTERN);
    
    for(let i = 0; i < arr.length; i++) {

       /*if(arr[i].includes('**********')) {
            arr[i] = arr[i].replace(space, " ");
        }*/

        while(arr[i].includes('10')){
            arr[i] = arr[i].replace(numberTen, ".");
        }
        while(arr[i].includes('11')){
            arr[i] = arr[i].replace(numberEleven, "-");
        }
        while(arr[i].includes('00')){
            arr[i] = arr[i].replace(numberZero, "");
        }

        
        arr[i] = (MORSE_TABLE.hasOwnProperty(arr[i])) ? MORSE_TABLE[arr[i]] : " ";
    }

    return arr.join("");

}
module.exports = {
    decode
}