function division(num1, num2){
    if(typeof num1 != "number" ||  typeof num2 != "number"){
        return "Operación invalida";
    }
    if(num1 === 0 || num2 === 0 && typeof num1 != "number" ||  typeof num2 != "number"){
        return "Operación indefinida";
    }
    return num1 / num2;
}
module.exports = division;