const prices = items.map(function(item) {
  return item.price
});

const totalPrice = prices.reduce(function(acc, i){
  return acc + i;
});

const avgPrice = totalPrice / items.length;

console.log(avgPrice.toFixed(2));

const filterPrices = items.filter(function(item){
  return item.price >= 14 && item.price<= 18 && item.currency_code === 'USD';
});

console.log(filterPrices);

const GBPItem = items.filter(function(item){
return item.currency_code === 'GBP';
});

console.log(GBPItem);

// const woodItems = items.filter(function(item) {
//   return items.materials.includes("wood");
// });
const item = items;
const findWood = item.filter(function(material) {
  return material.materials.includes("wood");
});

console.log('****NUMBER 4*');
findWood.forEach(function(arr)
{console.log(arr.title);
});




const eightOrMore = items.filter(function(item) {
  return item.materials.length >= 8;
});

eightOrMore.forEach(function(item) {
  console.log(item.title);
  item.materials.forEach(function(item) {
    console.log(item);
  });
});

const madeBySellers = items.filter(function(item) {
  return item.who_made === 'i_did';
});
console.log(`${madeBySellers.length} were made by their sellers`);
