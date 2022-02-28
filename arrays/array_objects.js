const generateMessages = (customers) => {
  return customers.map((customer) => {
    const name = customer.name;
    const discount = customer.discount;
    return `Hi ${name}! ${discount}% off our best candies for you today!`;
  });
};

const customers = [
  { name: 'Anna', discount: 50 },
  { name: 'Laura', discount: 40 },
  { name: 'Josh', discount: 30 },
  { name: 'Min', discount: 50 },
  { name: 'Karla',discount:  6 }
];

console.log(generateMessages(customers));