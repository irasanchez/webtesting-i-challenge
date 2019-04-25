const enhancer = require("./enhancer.js");
const { repair } = require("./enhancer.js");
const { succeed } = require("./enhancer.js");

//SUCCEED
describe("success function", () => {
  it("should increase the enhancement by 1", () => {
    const item = {
      name: "Golden Gun",
      type: "weapon",
      enhancement: 1
    };

    expect(succeed(item).enhancement).toEqual(2);
  });
});

//REPAIR
describe("repair function", () => {
  it("should return an item with a durability score of 100", () => {
    const item = {
      name: "Golden Gun",
      type: "weapon",
      durability: 5
    };

    expect(repair(item).durability).toEqual(100);
  });
});
