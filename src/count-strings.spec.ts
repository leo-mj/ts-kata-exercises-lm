import countStrings from "./count-strings";

test("counts all strings in array of numbers and strings", () => {
  expect(countStrings(["old", 10, 20, "pond", -5, -3])).toBe(2);
  expect(countStrings([10, 20, -5, -3])).toBe(0);
  expect(countStrings(["2", 10, 20, "pond", -5, -3])).toBe(2);
});
