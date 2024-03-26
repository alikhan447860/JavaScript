let year=2005;
if(year%100==0 || year%4==0 || year%400==0){
    console.log("The year is a leap year "+year);
}
else{
    console.log("The year is not a leap year"+year);
}