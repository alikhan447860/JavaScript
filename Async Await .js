
// const p=new Promise(function (resolve,reject){
//     resolve("Promis resolved"); 
// })
// async function getData(){
//     return p;
// }
// const data=getData();
// data.then(function(res){
//     console.log(res);
// })

// asyn await combo

// const p=new Promise (function(resolve,reject){
//     setTimeout(function(){
//         resolve("Promise done");
//     },5000);
   
// })
// async function handlePromis(){
//     const val =await p;
//     console.log("Ali khan");
//     console.log(val);
// }
// handlePromis();


//Real world async await program;
const Api_url="https://github.com/alikhan447860";

async function handlePromis(){
    const data =await Api_url;
}
handlePromis();