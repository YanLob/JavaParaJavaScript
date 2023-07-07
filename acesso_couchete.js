const cliente = {
    nome: "evandro",
    idade: 32,
    cpf: "1111222333"
}

console.log(`O cliente ${cliente["nome"]} tem ${cliente.idade} anos de idade.`)

const chave = ["nome", "idade", "cpf", "email"]

chave.forEach( (chave) => {
    console.log(`A chave ${chave} tem o valor de ${cliente[chave]}`)
})
