/*
Complete the getLaceNameDataForShoes function to return the expected result.

The function goes through the inventory objects focusing on its shoes property, checking if the name of the shoes contains lace laces, this also includes laced.

Then it returns a list of objects with the nameWords property whose value will be a list with the words of the shoe name that includes lace / laced. This object also has a property called targetWordIndex in which the index in which the word lace / laced is found is shown.

Example input:
let inventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      {name: 'tasselled black low-top lace-up', price: 1000},
      {name: 'tasselled green low-top lace-up', price: 1100},
      {name: 'plain beige suede moccasin', price: 950},
      {name: 'plain olive suede moccasin', price: 1050}
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      {name: 'red leather laced sneakers', price: 800},
      {name: 'black leather laced sneakers', price: 900}
    ]
  }
];
Example output:
[
  {
    "nameWords": [
      "tasselled",
      "black",
      "low-top",
      "lace-up"
    ],
    "targetWordIndex": 3
  },
  {
    "nameWords": [
      "tasselled",
      "green",
      "low-top",
      "lace-up"
    ],
    "targetWordIndex": 3
  },
  {
    "nameWords": [
      "red",
      "leather",
      "laced",
      "sneakers"
    ],
    "targetWordIndex": 2
  },
  {
    "nameWords": [
      "black",
      "leather",
      "laced",
      "sneakers"
    ],
    "targetWordIndex": 2
  }
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

function getLaceNameDataForShoes(inventory) {
  // your code here
  let aux = [];
  inventory.map((e) => {
    e.shoes.map((x) => {
      let splited = x.name.split(" ");
      let counting = 0;
      splited.map((s) => {
        if (s.startsWith("lace"))
          aux.push({ nameWords: splited, targetWordIndex: counting });
        else counting++;
      });
    });
  });
  return aux;
}

console.log(getLaceNameDataForShoes(inventory));

/*
-->
[
  {
    nameWords: [ 'tasselled', 'black', 'low-top', 'lace-up' ],
    targetWordIndex: 3
  },
  {
    nameWords: [ 'tasselled', 'green', 'low-top', 'lace-up' ],
    targetWordIndex: 3
  },
  {
    nameWords: [ 'red', 'leather', 'laced', 'sneakers' ],
    targetWordIndex: 2
  },
  {
    nameWords: [ 'black', 'leather', 'laced', 'sneakers' ],
    targetWordIndex: 2
  }
]
*/
