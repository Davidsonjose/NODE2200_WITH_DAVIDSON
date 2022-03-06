const { getYearOfBirth } = require("./index");
const { data } = require("./data");


const functionImported = getYearOfBirth(2000);
console.log(functionImported);  


// console.log(data)
const gettingData = data;
// gettingData.map((e)=>{

// })
gettingData.forEach((e)=>{
    console.log(e.name)
})
