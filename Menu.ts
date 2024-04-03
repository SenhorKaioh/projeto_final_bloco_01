import * as leia from 'readline-sync';

export function main(){

let cod: number;

 do{

    console.log("|*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-|")
    console.log("|                                             -|")
    console.log("| LOJAS CARIOCAS - Informática e  Periféricos -|")
    console.log("|                                             -|")
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

        console.log("Entre com a opção desejada: ")
        cod = leia.questionInt("");

        switch(cod){
            case 1: 
              console.log("\nLista de todos os produtos: \n");
                    
              break;
            
            case 2:
              console.log("\nConsulta do produto por ID: \n");
               
              break;
  
            case 3: 
              console.log("\nAdiconar Novo Produto: \n");
             
              break;
            case 4:
                console.log("\nAtualizar dados do Produto: \n");
                 
                break;
    
            case 5: 
                console.log("\nApagar o Produto: \n");
               
                break;  
            case 0:
              console.log("\nO Programa foi Finalizado!");
            break;
  
            default:
              console.log("\nOpção Inválida\n");  
  
         }

 }while(cod !== 0);


}
main()