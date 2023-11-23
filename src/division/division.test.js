const multiplicación = require("../multiplicación/multiplicación");
const division = require("./division")

test('60 / 4 should be 15', () => {
    const result = division(60,4);
    expect(result).toBe(15);
});
test('Si los numeros ingresados no son enteros debe mostrar un error', () => {
    const error = "Operación invalida";
    const result = division("60","4");
    expect(result).toBe(error);
});

test('24 / 0 no tiene resultado  definido', () => {
    const result = division(24,0);
    expect(result).toBe(undefined)
})
test('Si uno de los numero es igual a 0 la operación debe ser indefinida', () => {
    const error = "Operación indefinida";
    const result = division("24","0");
    expect(result).toBe(error);
});