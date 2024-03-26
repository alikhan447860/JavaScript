let a=17;
let count=0;
for(let i=1;i<=a;i++){
if(a%i==0){
    count++;
}
}
if(count==2){
    console.log("The number is prime number");
}else{
    console.log("The number is not a prime number");
}