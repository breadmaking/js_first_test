const fizzBuzz = require("./fizzbuzz");

describe("fizzBuzz", () => {
  it("returns Fizzbuzz when a number can be divided by 3 and 5 (15)", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz!");
  });
  it("returns Fizz when a number can be divided by 3", () => {
    expect(fizzBuzz(3)).toBe("Fizz!");
  });
  it("returns Buzz when a number can be divided by 5", () => {
    expect(fizzBuzz(5)).toBe("Buzz!");
  });
  it("returns a number when unable to be divided by the above", () => {
    expect(fizzBuzz(4)).toBe(4);
  });
});
