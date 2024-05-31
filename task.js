//Task 1
const cart = [
    { name: "Apple", price: 0.5, quantity: 4 },
    { name: "Banana", price: 0.25, quantity: 6 },
  ];
  
  const newItems = [
    { name: "Cherry", price: 0.75, quantity: 5 },
    { name: "Date", price: 1, quantity: 3 },
  ];
  
  const newarray = [...cart,...newItems];
  let t=0;
  for(let item of newarray){
    t+=item.price*item.quantity;
  }
console.log("total is"+ t );
// Ex 2: Rating 4.7 and above | Recommendations List
const books = [
    { title: "Infinite Jest", rating: 4.5, genre: "Fiction" },
    { title: "A Brief History of Time", rating: 4.8, genre: "Science" },
    { title: "The Catcher in the Rye", rating: 3.9, genre: "Fiction" },
    { title: "Sapiens", rating: 4.9, genre: "History" },
    { title: "Clean Code", rating: 4.7, genre: "Technology" },
  ];
  
  // Output
  let highRatedBooks=[];//camelCase
  for (let item of books) {
    if(item.rating>=4.7){
        highRatedBooks.push({books(item).title});

    }
    console.log(highRatedBooks);
  }

  // ['A Brief History of Time', 'Clean Code', 'Sapiens' ]

  // Ex 3: If employee's grades 80 or above promote them
const employes = [
    { id: 1, name: "Alice", grade: 78 },
    { id: 2, name: "Bob", grade: 85 },
    { id: 3, name: "Charlie", grade: 92 },
    { id: 4, name: "David", grade: 88 },
    { id: 5, name: "Eva", grade: 76 },
  ];
  let employee=[];
  for (let item of books) {
    if(item.grade>=80){
        employee.push({
           ...employee,
           status:"promoted",
        });
            
    }
  }
  console.log(employee);
  // This should output:
  // [{ id: 2, status: 'Promoted' }, { id: 3, status: 'Promoted' }, { id: 4, status: 'Promoted' }]
  
  // Ex4: Top 1 movie titles

const movies = [
    { title: "Inception", ratings: [5, 4, 5, 4, 5] },
    { title: "Interstellar", ratings: [5, 5, 4, 5, 4] },
    { title: "Dunkirk", ratings: [4, 4, 4, 3, 4] },
    { title: "The Dark Knight", ratings: [5, 5, 5, 5, 5] },
    { title: "Memento", ratings: [4, 5, 4, 5, 4] },
  ];
  function avg(ratings){
    let sum = 0;
    let sum1=0;
    for(let i=0; i<5;i++){
     sum += ratings[i];
     return sum;
 if(sum1>sum){
    
 }
  }

}
  // Expected Output:  The Dark Knight
  

