let num=10;
lt=0;
st=1;
ct=0;
console.log(lt);
console.log(st);
for(let i=0;i<=10;i++){
  ct=lt+st;
  lt=st;
  st=ct;
  console.log(ct);
}