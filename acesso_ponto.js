const cliente = {
    nome: "evandro",
    idade: 32,
    cpf: "1111222333"
}

console.log(`O cliente ${cliente.nome} tem ${cliente.idade} anos de idade.`)

console.log(`Seus 3 primeiros digitos do CPF são ${cliente.cpf.substring(0, 3)}`)
