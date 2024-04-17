const arr=[

{firstname:"Ali",lastname:"khan",age:21},
{firstname:"siddik",lastname:"khan",age:11},
{firstname:"sufiyan",lastname:"khan",age:11},

];
const output=arr.map(function(x){
    return x.firstname+" "+x.lastname;
})
console.log(output);
const output2=arr.filter(function(x){
    
    return x.age>11;
    
})
console.log(output2);