function resta(num1, num2){
    if(typeof num1 != "number" ||  typeof num2 != "number"){
        return "Operación invalida";
    }
    return num1 - num2;
}
module.exports = resta;