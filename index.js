const getData = require('./info.js');
const ps = require("prompt-sync");
const prompt = ps();


let city = prompt("Enter city name: ");

if(city != ""){
    getData(city)
}else{
    console.log("Please enter a valid city name !!!\n");
}