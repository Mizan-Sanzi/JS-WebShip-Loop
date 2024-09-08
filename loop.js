//while loop

/* 
****************************************************************
while (condition) {
    loop body/ while body
}
****************************************************************
*/

let counter = 0;
while (counter<5) {
    console.log("Hello");
    counter++;
}

let counter1 = 5;
while (counter1) {
    console.log("Hello While Loop")
    counter1--;
}

// Do While Loop----putting condition at the end!

let loopCount = 1;
do{
    console.log('Hello, do -- while loop', loopCount);
    loopCount++;
} while (loopCount<=5);

//for loop ---most used loop

/* structure: 

for (begin; condition checking; stepping){

} 
*/

for (let count = 1; count<=5; count++){
    console.log("Hello, for loop", count);
}

//Break statement 
let start = 1;
while (start<=10){
    if(start==6){
        break;
    }
    console.log("Hello, Break Statement", + start);
    start++
}

let myName = '';
while (true){
    let promptName = prompt('Enter Your Name');
    if (!promptName){
        break;
    }
    myName = myName + promptName;
}
console.log(myName);