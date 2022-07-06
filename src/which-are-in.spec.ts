import areIn from "./which-are-in";

test("sorts strings in a1 which are substrings of a2", () => {
  expect(areIn(['arp', 'live', 'strong'],['lively', 'alive', 'harp', 'sharp', 'armstrong'])).toStrictEqual(['arp', 'live', 'strong']);
  expect(
    areIn(
      ["tarp", "mice", "bull"],
      ["lively", "alive", "harp", "sharp", "armstrong"],
    ),
  ).toStrictEqual([]);
});
