/*
Write a function called renderAverageCostPerDesigner that will take in as paramater an array like CurrentInventory. Your function should now return the average cost of all shoes by designer in this format:
[
    {
      'name': 'Designer Name',
      'averagePrice': 000
    },
    {
      'name': 'Designer Name',
      'averagePrice': 000
    },
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
function renderAverageCostPerDesigner(inventory) {
  let aux = [];
  inventory.map((e) => {
    let price = 0;
    let length = e.shoes.length;
    e.shoes.map((x) => {
      price += x.price;
    });
    aux.push({ name: e.name, averagePrice: price / length });
  });
  return aux;
}

console.log(renderAverageCostPerDesigner(currentInventory));

/*
-->
[
  { name: 'Brunello Cucinelli', averagePrice: 1025 },
  { name: 'Gucci', averagePrice: 850 }
]
*/