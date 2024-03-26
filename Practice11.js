let str="racecar";
for(let i=0;i<str.length-1;i++){
    for(let j=str.length-1;j>=0;j--){
        if(str.charAt(i)==str.charAt(j)){
            console.log("The string is palindrome string")
        }
        
        break;
    }
 
}
console.log("no")