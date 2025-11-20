function soma(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Os parametros devem ser números");
  }
  return a + b;
}

module.exports = soma;
