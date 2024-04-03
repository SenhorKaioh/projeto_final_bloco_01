import * as leia from 'readline-sync';
import { ProdutoController } from './src/controller/ProdutoController';
import { Hardware } from './src/model/Hardware';
import { Periferico } from './src/model/Periferico';
import { log } from 'console';

export function main(){

let cod, tipo, preco, id: number;
let nome, componenteComputador,componente: string;
let tipoProduto = ['Hardware', 'Periferico']

const produtoController: ProdutoController = new ProdutoController();

produtoController.cadastrar(new Hardware(produtoController.gerarId(),"Intel i7 - 9 geracao", 1 , 900.00, "Processador"));
produtoController.cadastrar(new Hardware(produtoController.gerarId(),"Ryzen 5 3 geracao", 1 , 720.00, "Processador"));
produtoController.cadastrar(new Periferico(produtoController.gerarId(),"Red Dragon", 2 , 750.00, "Mouse"));
produtoController.cadastrar(new Periferico(produtoController.gerarId(),"Corsair 17", 2 , 1000.00, "Fone de Ouvido"));

 do{

    console.log("|*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-|");
    console.log("|                                             -|");
    console.log("|   LOJAS CARIOCAS - Hardware e Periféricos   -|");
    console.log("|                                             -|");
    console.log("|-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--|");
    console.log("|                                             -|");
    console.log("|        1 - Listar todos os Produtos         -|");
    console.log("|        2 - Listar Produto por id             |");
    console.log("|        3 - Adicionar o Produto              -|");
    console.log("|        4 - Atualizar Produto Cadastrado     -|");
    console.log("|        5 - Deletar o produto                -|");
    console.log("|        0 - Sair                             -|");
    console.log("|                                             -|");
    console.log("|-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*|");
    console.log("Entre com a opcao desejada: ");    
        cod = leia.questionInt("", {limitMessage: 'Entre com a opcao desejada: '});

        switch(cod){
            case 1: 
              console.log("\nLista de todos os produtos: \n");

              produtoController.listarTodas();

              keyPress()
              break;
            
            case 2:
              console.log("\nConsulta do produto por ID: \n");
              
              id = leia.questionInt("Digite o Id do Produto: " , {limitMessage: 'Digite o Id do Produto: '});
              produtoController.procurarPorId(id);

              keyPress()
              break;
  
            case 3: 
              console.log("\nAdiconar Novo Produto: \n");
              
              nome = leia.question("Digite o nome do Produto: " , {limitMessage: 'Digite o nome do Produto: '});
              tipo = leia.keyInSelect(tipoProduto, "", { cancel: false }) + 1;
              preco = leia.questionInt("Digite o Preco: " , {limitMessage: 'Digite o Preco: '});

              switch (tipo) {
                case 1:
                    componenteComputador = leia.question("Digite o tipo de Hardware: ");
                    produtoController.cadastrar(new Hardware(produtoController.gerarId(),
                        nome, tipo, preco, componenteComputador));
                    break;
                case 2:
                    componente = leia.question("Digite o tipo de Periferico: ");
                    produtoController.cadastrar(new Periferico(produtoController.gerarId(),
                        nome, tipo, preco, componente));
                    break;
            }
              keyPress()
              break;
            case 4:
                console.log("\nAtualizar dados do Produto: \n");
                
                id = leia.questionInt("Digite o Id do Produto: " , {limitMessage: 'Digite o Id do Produto: '});
                let produto = produtoController.buscarNoArray(id);

                if(produto !== null){
                  nome = leia.question("Digite o nome do Produto: " , {limitMessage: 'Digite o nome do Produto: '});
                  tipo = leia.keyInSelect(tipoProduto, "", { cancel: false }) + 1;
                  preco = leia.questionInt("Digite o Preco: " , {limitMessage: 'Digite o Preco: '});
    
                  switch (tipo) {
                    case 1:
                        componenteComputador = leia.question("Digite o tipo de Hardware: ");
                        produtoController.cadastrar(new Hardware(produtoController.gerarId(),
                            nome, tipo, preco, componenteComputador));
                        break;
                    case 2:
                        componente = leia.question("Digite o tipo de Periferico: ");
                        produtoController.cadastrar(new Periferico(produtoController.gerarId(),
                            nome, tipo, preco, componente));
                        break;
                }} else
                  console;log("Produto não encontrado!");

                keyPress()
                break;
    
            case 5: 
                console.log("\nApagar o Produto: \n");

                id = leia.questionInt("Digite o Id do Produto: " , {limitMessage: 'Digite o Id do Produto: '});
                produtoController.deletar(id);
                
                keyPress()
                break;  
            case 0:
              console.log("\nLOJAS CARIOCAS - A melhor do Rio, venha conhecer!!");
              sobre();
            break;
  
            default:
              console.log("\nOpção Inválida\n");  
  
         }

 }while(cod !== 0);

 function sobre(): void {
  console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("Caio Pereira - Caiopsantos.dev@gmail.com");
    console.log("github.com/SenhorKaioh");
    console.log("*****************************************************");
}

function keyPress(): void { 
  console.log("\nPressione enter para continuar...");
  leia.prompt();
}
}
main()