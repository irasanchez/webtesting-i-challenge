module.exports = {
  succeed,
  fail,
  repair,
  get
};

//SUCCEED
function succeed(item) {
  let oldEnhancement = item.enhancement;
  return oldEnhancement < 20
    ? { ...item, enhancement: ++oldEnhancement }
    : { ...item };
}

//FAIL

// - If the item's enhancement is less than 15, the durability of the item is decreased by 5.
// - If the item's enhancement is 15 or more, the durability of the item is decreased by 10.
// - If the item's enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17).

function fail(item) {
  let oldEnhancement = item.enhancement;
  let oldDurability = item.durability;

  oldEnhancement < 15
    ? (item = { ...item, durability: oldDurability - 5 })
    : (item = { ...item, durability: oldDurability - 10 });

  oldEnhancement > 16
    ? (item = { ...item, enhancement: oldEnhancement - 1 })
    : item;

  return item;
}

//REPAIR
function repair(item) {
  return item.durability !== 100 ? { ...item, durability: 100 } : null;
}

function get(item) {
  return { ...item };
}
