console.log("Start")
setTimeout(function cbt(){
    console.log("cb for settimeout");
},5000);
fetch("https://google.com")
.then(function cbf(){
    console.log("cb for google");
});
console.log("End");