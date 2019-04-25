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

console.log(succeed({ enhancement: 1 }));

//FAIL
function fail(item) {
  return { ...item };
}

//REPAIR
function repair(item) {
  return item.durability !== 100 ? { ...item, durability: 100 } : null;
}

function get(item) {
  return { ...item };
}
