const arr=[1,2,3,4,5,6];
// const output=arr.reduce(function(acc,curr){
//     acc=acc+curr;
//     return acc;
// })
// console.log(output);
const output=arr.reduce(function(max,curr){
    if(curr>max){
        max=curr;
       
    }
    return max;
},0)
console.log(output);