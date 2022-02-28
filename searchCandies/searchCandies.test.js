const searchCandies = require("./searchCandies");

describe("searchCandies", () => {
  it("returns an array of matching names that are less than the given price", () => {
    expect(searchCandies("Ma", 10)).toEqual(["Mars", "Maltesers"]);
  });
});
