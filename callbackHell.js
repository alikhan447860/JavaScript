const cart=["pants","shoes","shirt"];
api.createOrder(cart,function(){
    api.ProcedToPayment(function (){
        api.ShowOrderSummary(function (){
            api.UpdateWallet()
        })
    })
})
