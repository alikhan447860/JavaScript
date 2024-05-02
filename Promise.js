const google_api="https://google.com";
const user=fetch(google_api);
console.log(user);
user.then(function(data){
    console.log(data);P
})