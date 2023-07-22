const soma = (num1, num2) => num1 + num2;

console.log(soma(5, 5));

const tabuada = num =>{
    for (let i = 1; i <= 10; i++){
        console.log(`${num} X ${i} = ${num*i}`)
    }
}

tabuada(10)