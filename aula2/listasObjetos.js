const cliente = 
{
    nome: "lucas",
    email: "lucas.ferreira@gmail.com",
    telefone: ["11 12323200", "11 32131533"]    
}

//Endereços com apartamentos
cliente.enderecos = [{
    rua: "R. Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934"
}]

cliente.enderecos.push({
    rua: "R. Chales PUBLIC",
    numero: 933,
    apartamento: true,
    complemento: "ap 036"
})

//Enderecos sem apartamentos
cliente.enderecos.push({
    rua: "R. Joseph Ladder",
    numero: 404,
    apartamento: false,
    alugueu: 2500
})

cliente.enderecos.push({
    rua: "R. Sparky deathcap",
    numero: 201,
    apartamento: false,
    alugueu: 1000
})

const residencias = cliente.enderecos.filter(
    (enderecos) => enderecos.apartamento === false
)

const listaApenasApartamentos = cliente.enderecos.filter(
    (enderecos) => enderecos.apartamento === true
)

console.log(listaApenasApartamentos)

console.log("-----------------------------------------------------------------")

console.log(residencias)

cliente.enderecos.forEach((enderecos) => {
    console.log(`${enderecos["rua"]} com o número ${enderecos["numero"]}`)
});
