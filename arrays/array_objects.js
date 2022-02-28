const generateMessages = (customers) => {
  return customers.map((customer) => {
    const name = customer.name;
    const discount = customer.discount;
    return `Hi ${name}! ${discount}% off our best candies for you today!`;
  });
};

const customers = [
  { name: "Anna", discount: 50 },
  { name: "Laura", discount: 40 },
  { name: "Josh", discount: 30 },
  { name: "Min", discount: 50 },
  { name: "Karla", discount: 6 },
];

console.log(generateMessages(customers));

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const isEvenNumber = (number) => {
  if (number % 2 == 0) {
    return number;
  } else {
    //pass
  }
};

const evenNumbers = numbers.map((number) => {
  return isEvenNumber(number);
});
