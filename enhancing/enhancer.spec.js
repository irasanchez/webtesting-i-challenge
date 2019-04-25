const enhancer = require("./enhancer.js");
const { repair } = require("./enhancer.js");
// - a `repair(item)` method that accepts an `item` object and **returns a new item** with the durability restored to 100. This method is the simplest of the three and would be a **good starting point** on this project.
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
