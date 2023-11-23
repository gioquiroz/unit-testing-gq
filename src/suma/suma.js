//Unidad de prueba
function sum(a, b){
    if(typeof a != "number" ||  typeof b != "number"){
        return "Tipos de datos invalidos";
    }
    return a + b;
}
module.exports = sum;