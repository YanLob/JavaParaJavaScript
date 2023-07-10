const cliente = 
{
    nome: "yan",
    idade: 18,
    email: "yan.fernando@gmail.com",
    telefone: ["11 12323200", "11 32131533"]    
}

//Endereços com apartamentos
cliente.enderecos = [{
    rua: "R. Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934"
}]

for (let chave in cliente) {
    let tipo = typeof cliente[chave]
    
    if (tipo !== "object" && tipo !== "function") {
        console.log(`A chave ${chave}, tem o valor ${cliente[chave]}`)
    }
}
