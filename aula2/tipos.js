const cliente = 
{
    nome: "lucas",
    email: "lucas.ferreira@gmail.com",
    telefone: ["11 12323200", "11 32131533"]    
}

const chave = ["nome", "email", "telefone"]

chave.forEach((chave) => {
    console.log(`O ${chave} do cliente é ${cliente["nome"]}`)
})