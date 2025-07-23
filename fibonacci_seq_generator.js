const readline = require('readline-sync');

let n=parseInt(readline.question("Enter the value of n : "));
let sequence=[];

if(n==1){
    sequence=[0];
} else if(n==2){
    sequence=[0,1];
} else{
    sequence=[0,1];
    for(i=2;i<n;i++){
        sequence.push(sequence[i-1]+sequence[i-2]);
    }
}

sequence.join(', ');
console.log(sequence);