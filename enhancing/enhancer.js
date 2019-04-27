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
  var enhancement = item.enhancement;
  var oldName = item.name;

  if (enhancement < 0) {
    return `error, item enhancement cannot be below 0`;
  } else if (enhancement === 0) {
    return { ...item };
  } else {
    return { ...item, name: `\[\+${enhancement}\] ${oldName}` };
  }
}
