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

const chavesDoObjeto = Object.keys(cliente);

if (!chavesDoObjeto.includes("enderecos")) {
    console.error("Error: É necessario que tenha um endereco cadastrado.")
}else {
    console.log(chavesDoObjeto)
}

