const add = require("./add");

describe("add", () => {
  // test cases
  it("adds 2 and 2", () => {
    //TODO write test
    expect(add(2, 2)).toBe(4);
  });

  it("adds 0 and 5", () => {
    expect(add(0, 5)).toBe(5);
  });
});
