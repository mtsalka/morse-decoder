'use strict'

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
    expr = expr.split(/(\d{10})/g)
               .join(' ')           
               .replace(/10/g, '.') 
               .replace(/11/g, '-') 
               .replace(/00/g, '')  
               .replace(/\*{10}/g, '_')
               .split(' ')         
               .map(element => {
                   if (element == '_') return ' ';
                   for (let key in MORSE_TABLE) {
                       if (key == element) return MORSE_TABLE[key];
                   };
               })
               .join('')
    return expr;
}

module.exports = {
    decode
}
