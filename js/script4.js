// let floorNumber = parseInt(prompt('what floor'));

// let transportCost;

// // console.log (floorNumber);

// if(floorNumber === 1) {
//     transportCost = 0; 
// } else if(floorNumber >=2 && floorNumber <=4){
//     transportCost = 20 * (floorNumber-1);
// } else if(floorNumber >= 5 && floorNumber <= 7){
//     transportCost = 30 *  (floorNumber-4) + 20 * 3
// }





// console.log('FloorNumber');

// console.log (transportCost);



//function calculatePriceByFloor(floor) {
//console.log(floor)
//}

//(4)


//let floorNumber = parseInt(prompt('what floor'));

//let transportCost;

// console.log (floorNumber);

//if(floorNumber === 1) {
    //transportCost = 0; 
//} else if(floorNumber >=2 && floorNumber <=4){
   // transportCost = 20 * (floorNumber-1);
//} else if(floorNumber >= 5 && floorNumber <= 7){
    //transportCost = 30 *  (floorNumber-4) + 20 * 3
//}




//let floorNumber = parseInt(prompt('what floor'));

//let transportCost;

// console.log (floorNumber);

//if(floorNumber === 1) {
    //transportCost = 0; 
//} else if(floorNumber >=2 && floorNumber <=4){
   // transportCost = 20 * (floorNumber-1);
//} else if(floorNumber >= 5 && floorNumber <= 7){
    //transportCost = 30 *  (floorNumber-4) + 20 * 3
//}




//function calculatePriceByFloor(floorNumber) {
    //   console.log(floor);
   // let transportCost = 0
     // if (floorNumber === 1) {
    //    transportCost = 0;
      //} else if (floorNumber >= 2 && floorNumber <= 4) {
      //  transportCost = 20 * (floorNumber - 1);
    //  } else if (floorNumber >= 5 && floorNumber <= 7) {
      //  transportCost = 30 * (floorNumber - 4) + 20 * 3;
    //  }
  //   console.log  ( `Delivery to the${floorNumber } floor costs ${transportCost} `)
    
   // }
    
  //  calculatePriceByFloor(5);

    const numbers = [1, 2, 3, 4, 5]

    let index = numbers.indexOf('book')

    console.log(index)
    
   // numbers.splice(3, 2);
   // console.log(numbers);

   const myGarage = {
    cars: ['BMW', 'Porsche', 'VW', 'Ford'],
    getCars() {
        return this.cars;
    } ,
addcar(car) {
    this.cars.push(car)
}, 
deletecar(car) {
    let index = this.cars.indexOf(car)
    this.cars.splice(index, 1)

    }
   }
   

   //console.log(myGarage.getCars())
   //console.log(myGarage.addcar('Lamborgini'))
   //console.log(myGarage.deletecar('Ford'))
   //console.log(myGarage.getCars())

   let list = document.querySelector('.list')
   console.log(list);
   
   let first = list.firstElementChild;
   
   first.style.color = 'tomato';