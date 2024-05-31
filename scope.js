//  let& const -block scope {}
      {
        var x1 = 10;
        let x2 = 20;
      }
      console.log(x1);
      console.log(x2); //not defined

      var x1 = 3;
var x2 = "5";
console.log(x1 + x2); //35
console.log(x1 - x2); //-2
var x1 = 3;
var x2 = "5";
// to convert x2 into number
console.log(x1 + parseInt(x2)); //8
console.log(x1 + +x2); //8

const cart = [
  { name: "Apple", price: 0.5, quantity: 4 },
  { name: "Banana", price: 0.25, quantity: 6 },
];

const newItems = [
  { name: "Cherry", price: 0.75, quantity: 5 },
  { name: "Date", price: 1, quantity: 3 },
];

//   Ex 1.1: Combine cart + newItems
 var newArray = [...cart+...newItems]

for (i=0;i<4;i++) {
  var t2=0;
 var t1 = i.price * i.quantity;
 var t2 = t2 + t1;
}
console.log("total cart =",t2);
// Ex 1.2: Find total of cart
