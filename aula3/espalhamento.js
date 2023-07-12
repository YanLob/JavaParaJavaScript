const cliente = 
{
    nome: "yan",
    idade: 18,
    email: "yan.fernando@gmail.com",
    telefone: ["11 12323200", "11 32131533"]    
}

cliente.enderecos = [{
    rua: "R. Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934"
}]

//cliente.enderecos.push({
//   rua: "R. Habits vintage",
//    numero: 1930,
//    apartamento: false,
//    alugueu: 2500
//})

function ligarParaCliente(numeroComercial, numeroResidencial) {
    console.log(`Ligando para ${numeroComercial}`)
    console.log(`Ligando para ${numeroResidencial}`)
}

//Sem usar espalhamento(forma BRUTA)
ligarParaCliente(cliente.telefone[0], cliente.telefone[1])
console.log("----------------------------------")
//Usando espalhamento(forma simples)
ligarParaCliente(...cliente.telefone)

const encomenda = {
    desdinatario: cliente.nome,
    ...cliente.enderecos[0]
}

//console.log(...cliente.enderecos)

console.log(encomenda)
