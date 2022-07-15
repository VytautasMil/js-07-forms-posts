const numArr = [11, 21, 3, 14, 5, 6, 17, 8, 99, 10, 11];
const kazkosArr = [
  { age: 12, name: 'John' },
  { age: 45, name: 'Mike' },
  { age: 33, name: 'Bob' },
];
console.log('kazkosArr ===', kazkosArr);
console.log('kazkosArr ===', JSON.stringify(kazkosArr));
console.log('numArr ===', numArr);

// kazkosArr.sort((a, b) => a.age - b.age);
kazkosArr.sort((a, b) => a.name > b.name);
console.log('kazkosArr po ===', kazkosArr);
// sort funkcija turi grazinti 1, -1, arba 0
kazkosArr.sort((a, b) => {
  if (a.name > b.name) {
    return 1;
  } else if (a.name < b.name) {
    return -1;
  } else if (a.name === b.name) {
    return 0;
  }
});
// numArr.sort((a, b) => a - b);
numArr.sort((a, b) => b - a);
console.log('numArr po sort ===', numArr);