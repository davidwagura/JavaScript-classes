const prompt = require ("prompt-sync")({sigint: true})

const length = prompt("enter the length  ");

const width = prompt("enter the width   ");

//let height = prompt("enter height");

let area = length * width;

console.log('The area is ' + area);