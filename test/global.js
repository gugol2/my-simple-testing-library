const { sumAsync, subtractAsync } = require("../math");

test("sumAsync adds numbers asynchronously", async () => {
  const result = await sumAsync(3, 7);
  const expected = 10;
  expect(result).toBe(expected);
});

test("subtractAsync subtracts numbers asynchronously", async () => {
  const result = await subtractAsync(7, 3);
  const expected = 4;
  expect(result).toBe(expected);
});

// because our method are set globally in setup-globals.js
// we can now call our tests like so in the command line
// node --require ./setup-globals.js my-lessons/globals.js
