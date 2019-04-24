//Basic assertion in Jasmine

describe("Math functions", function() {
  const math = require("../math");

  describe("math.add():", function() {
    it("add() should return a number", function() {
      expect(typeof math.add("1", "1")).toBe("number");
    });

    it("add(2, 2) should return 4", function() {
      expect(math.add(2, 2)).toBe(4);
    });

    it("add(-9, 1) should return -8", function() {
      expect(math.add(-9, 1)).toBe(-8);
    });
  });

  describe("math.subtract():", function() {
    it("subtract() should return a number", function() {
      expect(typeof math.subtract("1", "1")).toBe("number");
    });

    it("subtract(10, 5) should return 5", function() {
      expect(math.subtract(10, 5)).toBe(5);
    });

    it("subtract(-6, 7) should return 1", function() {
      expect(math.subtract(-6, 7)).toBe(-13);
    });
  });

  describe("math.average():", function() {
    it("average([1, 2, 3, 4]) should return a number", function() {
      expect(typeof(math.average([1, 2, 3]))).toBe("number");
    });

    it("average([1, 2, 3]) should return 2", function() {
      expect(math.average([1, 2, 3])).toBe(2);
    });

    it("average([1.5, 1.8, 1.9]) should return 2.59", function() {
      expect(math.average([1.5, 1.8, 1.9])).toBe(1.73)
    });
  });
});
