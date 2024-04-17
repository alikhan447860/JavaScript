const arr=[2,3,4,4,6,5,7,2];

function isOdd(x){
      if(x%2!=0)
      return x;
}
const output= arr.filter(isOdd);
console.log(output);