const p1=  new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("P1 success"),3000
    });
});
const p2=  new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("P2 success"),1000
    });
});
const p3=  new Promise(function(resolve,reject){
    setTimeout(function(){
        reject("p3 fail"),2000
    });
});
Promise.all([p1,p2,p3]).then(function(res){
    console.log(res);
})
.catch(function(err){
    console.error(err);
})