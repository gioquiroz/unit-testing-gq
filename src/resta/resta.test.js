const resta = require("./resta");

test('670 - 235 should be 435', () => {
    // Sujeto de prueba
    const result = resta(670,235);
    // test
    expect(result).toBeLessThanOrEqual(435);
});
test('Si los datos no son enteros me debe retornar un error', () => {
    const error = "Operación invalida";
    const result = resta("670", "235");
    expect(result).toBe(error);
})