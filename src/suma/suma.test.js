const sum = require("./suma");

test('10 + 20 should be 30', () => {
    // Sujeto de prueba
    const result = sum(10,20);
    // test
    expect(result).toBe(30);
});
test('Si los datos no son enteros me debe retornar un error', () => {
    const error = "Tipos de datos invalidos";
    const result = sum("10", "20");
    expect(result).toBe(error);
})