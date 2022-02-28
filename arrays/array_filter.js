const checkLength = (phonenumber) => {
  if(phonenumber.length <= 10){
    return true;
  } else {
    return false;
  }
}

const filterLongNumbers = (phonenumbers) => {
  return(phonenumbers.filter(checkLength));
}

const numbers = [
  '1763687364',
  '4763687363',
  '7867867862',
  'aaaaaaaabbbbbbbcccccdddddddd' // this element should be filtered
];

console.log(filterLongNumbers(numbers));


console.log(filterLongNumbers(['4763687363', '7867867862'])); // no number to filter out


console.log(filterLongNumbers([]))
