function close(){
var count=1;
document.getElementById("click").addEventListener("click",function x(){
    console.log("Button clicked",count++);
});
}
close();