let cartvalue = document.getElementById("cart-value");
let carticon = document.getElementById("cart");
let updateButton = document.getElementsByClassName("button");
let items = [
  {
    name: "This was our pact",
    number: 0,
    dollars: 7,
    cents: 49,
  },
  {
    name: "The famous five",
    number: 0,
    dollars: 4,
    cents: 59,
  },
  {
    name: "Matilda",
    number: 0,
    dollars: 6,
    cents: 80,
  },
  {
    name: "Harry Potter",
    number: 0,
    dollars: 10,
    cents: 0,
  },
  {
    name: "For Young Readers",
    number: 0,
    dollars: 7,
    cents: 29,
  },
  {
    name: "Wimpy Kid - DIY",
    number: 0,
    dollars: 4,
    cents: 99,
  },
  {
    name: "Dart Board",
    number: 0,
    dollars: 17,
    cents: 49,
  },
  {
    name: "Connect Four",
    number: 0,
    dollars: 19,
    cents: 99,
  },
  {
    name: "Jenga",
    number: 0,
    dollars: 20,
    cents: 99,
  },
  {
    name: "Monopoly",
    number: 0,
    dollars: 19,
    cents: 49,
  },
  {
    name: "Bookmarks",
    number: 0,
    dollars: 12,
    cents: 49,
  },
  {
    name: "Birthday Card",
    number: 0,
    dollars: 12,
    cents: 49,
  },
  {
    name: "Stuffed toys",
    number: 0,
    dollars: 15,
    cents: 99,
  },
  {
    name: "Dream catcher drawing",
    number: 0,
    dollars: 18,
    cents: 49,
  },
];

function updateCart() {
  let cart = 0;
  for (index = 0; index < items.length; index++) {
    cart = cart + items[index].number;
  }
  cartvalue.innerHTML = cart;
}

for (let i = 0; i < updateButton.length; i++) {
  updateButton[i].onclick = (e) => {
    items[i].number++;
    updateCart();
  };
}

let totalDollars = 0;
let totalcents = 0;
function updatePrice() {
  let totalinCents = 0;

  for (index = 0; index < items.length; index++) {
    totalinCents =
      totalinCents +
      items[index].number * (items[index].dollars * 100 + items[index].cents);
  }
  totalDollars = Math.floor(totalinCents / 100);
  totalcents = totalinCents % 100;
}

carticon.onclick = () => {
  updatePrice();
  for (let index = 0; index < items.length; index++) {
    if (items[index].number != 0) {
      console.log(
        "Item name: " +
          items[index].name +
          " & number of item: " +
          items[index].number
      );
    }
  }
  console.log(
    "The amount is " + totalDollars + "$ and " + totalcents + " cents"
  );
};