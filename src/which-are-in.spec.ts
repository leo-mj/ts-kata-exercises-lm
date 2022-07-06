import areIn from "./which-are-in";

test("areIn finds strings in a1 which are substrings of a2", () => {
  expect(
    areIn(
      ["arp", "live", "strong"],
      ["lively", "alive", "harp", "sharp", "armstrong"],
    ),
  ).toStrictEqual(["arp", "live", "strong"]);
  expect(
    areIn(
      ["tarp", "mice", "bull"],
      ["lively", "alive", "harp", "sharp", "armstrong"],
    ),
  ).toStrictEqual([]);
});

test("areIn sorts the returned array alphabetically", () => {
  expect(
    areIn(
      ["live", "arp", "strong"],
      ["lively", "alive", "harp", "sharp", "armstrong"],
    ),
  ).toStrictEqual(["arp", "live", "strong"]);
});

test("areIn avoids duplicate strings in its return", () => {
  expect(
    areIn(
      ["arp", "live", "arp"],
      ["lively", "alive", "harp", "sharp", "armstrong"],
    ),
  ).toStrictEqual(["arp", "live"]);
});
