//let cost = 0;

//let username = prompt("What's your floor?", "Enter your floor");

//const eightfloor = 40;

//if(eightfloor >= 8 );  {
  //  cost = 40;
//}                             //Пытаюсь установить через if если этаж 8 или больше то оплата будет 40 гривен.

//if(subscription === 'firstfloor') {
    //cost = 0;
//} else if(subscription === 'twothroughtfourfloor') {
    //cost = 20;
//} else if(subscription === 'fivethroughtsevenfloor') {
    //cost = 30;
//}



let floorNumber = parseInt(prompt('what floor'));

let transportCost = 0;
if(floorNumber === 1) {
    transportCost = 0;
} else if(floorNumber >=2 && floorNumber <=4){
    transportCost = 20 * (floorNumber-1);
} else if(floorNumber >= 5 && floorNumber <= 7){
    transportCost = 30 *  (floorNumber-4) + 20 * 3
}else if(floorNumber >=8 ) {
    transportCost = 20 * 3 + 30 * 3 + 40 * (floorNumber - 7)
} else(
    console.log("error, negative number")
)






console.log('FloorNumber');

console.log (transportCost);

//let type;
//let age = 20;

//if (age >= 18){
   //type = 'adult';
   // } else {
      //  type = 'child';

   // }

//const num1 = 5;
//const num2 = 10;
//let biggerNumber;

let type;
let age = 20;

if (age >= 18){
   type = 'adult';
    } else {
       type = 'child';

    }

const num1 = 5;
const num2 = 10;
let biggerNumber;


if (num1 > num2) {
  biggerNumber = num1;
} else {
  biggerNumber = num2;
}

console.log(biggerNumber); // 10

let counter = 0;

 while (counter < 10) {
  console.log('counter: ', counter);
  counter++ //counter +=1 или counter = counter + 1 
 }


 for (let counter = 0; counter < 10; counter++) {
    console.log('counter; ', counter);
 }