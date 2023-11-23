function multiplicación(num1, num2){
    if(typeof num1 != "number" ||  typeof num2 != "number"){
        return "Operación invalida, verifique el tipo de dato";
    }
    return num1 * num2;
}
module.exports = multiplicación;