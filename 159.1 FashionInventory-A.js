/*
Write a function called renderInventory that will receive as a parameter an array like currentInventory.
Your function should access all the shoes across each desiger and return a matrix (array of arrays) like this:
[
   [designer name, shoe name, price],
   [designer name, shoe name, price],
   ...
]
*/

let currentInventory = [
  {
    name: "Brunello Cucinelli",
    shoes: [
      { name: "tasselled black low-top lace-up", price: 1000 },
      { name: "tasselled green low-top lace-up", price: 1100 },
      { name: "plain beige suede moccasin", price: 950 },
      { name: "plain olive suede moccasin", price: 1050 },
    ],
  },
  {
    name: "Gucci",
    shoes: [
      { name: "red leather laced sneakers", price: 800 },
      { name: "black leather laced sneakers", price: 900 },
    ],
  },
];

function renderInventory(inventory) {
  // your code here
  // hint: before you just dive into coding...
  // it's a good idea to sketch out a skeleton like you've been seeing earlier in this module...
  let aux = [];
  inventory.map((e) => {
    e.shoes.map((x) => {
      aux.push([e.name, x.name, x.price]);
    });
  });
  return aux;
}
console.log(renderInventory(currentInventory));

/*
// --> [
  [ 'Brunello Cucinelli', 'tasselled black low-top lace-up', 1000 ],
  [ 'Brunello Cucinelli', 'tasselled green low-top lace-up', 1100 ],
  [ 'Brunello Cucinelli', 'plain beige suede moccasin', 950 ],
  [ 'Brunello Cucinelli', 'plain olive suede moccasin', 1050 ],
  [ 'Gucci', 'red leather laced sneakers', 800 ],
  [ 'Gucci', 'black leather laced sneakers', 900 ]
]
*/
