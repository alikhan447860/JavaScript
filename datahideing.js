function counter(){
var count=0;
 function inccount(){
 count++;
 console.log(count);
}
return inccount;
}
counter()();