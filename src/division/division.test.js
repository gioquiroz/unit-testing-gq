const division = require("./division")
test('24 / 0 no tiene resultado  definido', () => {
    const result = division(24,0);
    expect(result).toBe(Infinity)
})
test('Si uno de los numero es igual a 0 la operación debe ser indefinida', () => {
    const error = "Operación infinita no definida";
    const result = division("24","0");
    expect(result).toBe(error);
});

test('72 / 4 should be 18', () => {
    const result = division(72,4);
    expect(result).toBe(18);
});
test('Si los numeros ingresados no son enteros debe mostrar un error', () => {
    const error = "Operación invalida";
    const result = division("72","4");
    expect(result).toBe(error);
});
