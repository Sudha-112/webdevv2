//table of a number
//for loop
let n = prompt("Enter the number");
n = parseInt(n);
for(let i = 1; i <= 10; i++){
    console.log(n*i);
}

//nested for loop
for(let i = 1; i <=3; i++){
    console.log(`outer loop ${i}`);
    for(let j = 1; j<=3; j++){
       console.log(j);
    }
}

//while loop
console.log("Use of while loop");
let i = 1;

while(i <= 10){
   console.log(i);
   i++;
}

//break keyword
console.log("Use of break keyword");
let k = 1;
 while(k <= 5){
    if(k == 3){
        break;  // use of break keyword to get out of the whole loop
    }
    console.log(k);
    k++;
 }