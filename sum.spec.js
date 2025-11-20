const { describe } = require("node:test");
const soma = require("./sum");

describe("sum.js", () => {
  it("deve retornar 5 quando somar 2 + 3", () => {
    expect(soma(2, 3)).toBe(5);
  });
  it("deve retornar -1 quando somar -2 + 1", () => {
    expect(soma(-2, 1)).toBe(-1);
  });
});
