class Produto {
    constructor() {
        this.nome = "",
            this.descricao = "",
            this.quant = 0,
            this.valor = 0,
            this.foto1 = "",
            this.foto2 = "",
            this.foto3 = ""
    };

    //Create Read Update Delete (CRUD)
    //Adicionar produto ao armazenamento
    add(produto) {
        try {
            this.validData();
            var baseProduto = JSON.parse(localStorage.getItem('produtos'));//JSON.parse() -> pega um json e converte em objeto
            if (baseProduto == null) {
                baseProduto = [];  //Criando Vetor para receber os dados do localstorage
            }

            baseProduto.push(produto); // Adicionando o produto na lista de produtos;
            var produtosJson = JSON.stringify(baseProduto); //Criando JSON dos objetos na baseProduto
            localStorage.setItem('produtos', produtosJson);
            localStorage.setItem("atualizado", new Date().toString());
            //return true;
        } catch (ex) {
            console.error(ex);
            throw ex;
            //return false;
        }
    }

    //listar produtos
    getAll() {
        var baseProduto = JSON.parse(localStorage.getItem('produtos'));
        if (baseProduto == null) {
            baseProduto = [];  //Criando Vetor para receber os dados do localstorage
        }
        return baseProduto;
    }

    //atualizar produtos

    //remover produtos

    //validarDados: passiva
    validData() {
        var erros = "";
        if (!this.nome || this.nome == "") {
            erros += "Esqueceu o Nome!\n";
        }

        if (!this.descricao || this.descricao == "") {
            erros += "Esqueceu a Descrição!\n";
        }

        if (!this.quant || this.quant == 0) {
            erros += "Esqueceu a Quantidade!\n";
        }

        if (!this.valor || this.valor == 0) {
            erros += "Falta o Valor!\n";
        }

        if (erros != "") {
            throw erros;
        }
    }
}