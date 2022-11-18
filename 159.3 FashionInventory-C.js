/*
Complete the renderInventory function to return the expected result.

Return a matrix (List contained by lists) these lists will contain the shoes' data that includes the name black in it with its respective price. In the following order:

[
  [brandName, shoeModel, price],
  [brandName, shoeModel, price],
  ...
]
*/

let inventory = [
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

function renderInventory(shoeList) {
  let newListOfBlack = [];
  shoeList.map((item, index) => {
    item.shoes.map((item2, index) => {
      if (item2.name.includes("black"))
        newListOfBlack.push([item.name, item2.name, item2.price]);
    });
  });
  return newListOfBlack;
}

console.log(renderInventory(inventory));


/*
-->
[
  [ 'Brunello Cucinelli', 'tasselled black low-top lace-up', 1000 ],
  [ 'Gucci', 'black leather laced sneakers', 900 ]
]
*/