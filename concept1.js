function add(num1,num2){
    return num1 + num2;

}
function multiply(num1,num2){
    return num1 * num2;

}
function calculator(num1,num2,operator){
    return operator(num1,num2)
}
console.log(calculator(3,2,add))
console.log(calculator(4,5,multiply))
