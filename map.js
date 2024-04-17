const arr=[2,3,4,5,6,7,8];

function double(x){
    return x*2;
}

function triple(z){
    return z*3;
}
let output4=arr.map(function binary(x){
    return x*toString(2);
})
const output3=arr.map(triple);
const output=arr.map(double);
console.log(triple);``
console.log(output);
console.log(output4)