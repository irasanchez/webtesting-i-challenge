const enhancer = require("./enhancer.js");
const { repair } = require("./enhancer.js");
const { succeed } = require("./enhancer.js");
const { fail } = require("./enhancer.js");

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

//FAIL
describe("fail function", () => {
  it("should decrease the durability by 5 if enhancement is below 15", () => {
    const item = {
      name: "Golden Gun",
      type: "weapon",
      durability: 10,
      enhancement: 5
    };

    expect(fail(item).durability).toEqual(5);
  });

  it("should decrease the durability by 10 if enhancement is above 15", () => {
    const item = {
      name: "Golden Gun",
      type: "weapon",
      durability: 15,
      enhancement: 16
    };

    expect(fail(item).durability).toEqual(5);
  });

  it("should decrease the enhancement by 1 if enhancement is above 16", () => {
    const item = {
      name: "Golden Gun",
      type: "weapon",
      durability: 15,
      enhancement: 20
    };

    expect(fail(item).enhancement).toEqual(19);
  });
});
