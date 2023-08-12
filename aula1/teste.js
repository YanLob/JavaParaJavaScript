const Pessoa = {
    nome: "",
    quantidadeFilhos: 0,
    salario: 0,
    taxa: 0,
    calcular(){

        if (this.salario < 2500) 
        {
            console.log("Seu salário não sofreu alterações.");
        }

        else if (this.salario > 2500 && this.salario < 5000)
        {

            if (this.quantidadeFilhos === 0) {
                this.taxa = this.salario * 0.20;
            }

            else if (this.quantidadeFilhos === 1) {
                this.taxa = this.salario * 0.15;
            }

            else if (this.quantidadeFilhos >= 2) {
                this.taxa = this.salario * 0.10;
            }

        }

        else if(this.salario >= 5000) 
        {

            if (this.quantidadeFilhos === 0){
                this.taxa = this.salario * 0.30;
            }

            else if (this.quantidadeFilhos === 1){
                this.taxa = this.salario * 0.28;
            }

            else if (this.quantidadeFilhos >= 2){
                this.taxa = this.salario * 0.22;
            }

        }
        console.log(`${this.nome} seu salário com o desconto do imposto ficou R$${this.salario -= this.taxa}.`);
    }
}

Pessoa.nome = "Renato Cariane"
Pessoa.quantidadeFilhos = 3
Pessoa.salario = 18000

Pessoa.calcular()
