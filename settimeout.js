/*function x(){
var i=10;
setTimeout(function(){
    console.log(i)
    },3000)
}
console.log("hello ");
x();
*/

function x(){
 for(let i=1;i<=5;i++){
    setTimeout(function(){
        console.log(i)
    },i*1000)
 }
console.log("Here we GO!!")
}
x();