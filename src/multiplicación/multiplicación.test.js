const multiplicación = require("./multiplicación");

test('60 * 7 should be 420', () => {
    // Sujeto de prueba
    const result = multiplicación(60,7);
    // test
    expect(result).toBe(420);
});
test('Si los datos no son enteros me debe retornar un error', () => {
    const error = "Operación invalida, verifique el tipo de dato";
    const result = multiplicación("60", "7");
    expect(result).toBe(error);
})