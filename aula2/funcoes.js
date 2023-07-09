const cliente = 
{
    nome: "lucas",
    email: "lucas.ferreira@gmail.com",
    telefone: ["11 12323200", "11 32131533"], 
    saldo: 200,
    efetuaPagamento: function (valor) {
        if (valor > this.saldo) {
            console.log("balence insufficient");
        }
        else {
            this.saldo -= valor;
            console.log(`sucessful payment. Your money it's ${this.saldo} of bolsonaro`);
        }
    }
}

cliente.efetuaPagamento(178)
