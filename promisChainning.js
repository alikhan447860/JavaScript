const { set } = require("express/lib/application");

const cart=["Kurta","pajama","Shoes"];
const Promise =CreateOder(cart);
Promise.then(function(oderId){
    console.log(oderId);
})
function CreateOder(cart){
    const pr= new Promise(function(resolve,reject){
      if(!validatecart(cart)){
         const err= new Error("cart is not valid");
         reject(err);
      }
      // create oder 
      const oderId="1234";
      if(oderId){
        setTimeout(function (){
            resolve(oderId);
        },5000)
        
      }
    });
    return pr;
    function validatecart(cart){
        return true;
    }
}
