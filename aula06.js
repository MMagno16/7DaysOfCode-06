//criar a opção de remover algum item da lista, que será exibida junto à pergunta de “você deseja adicionar uma comida na lista de compras”? ok.
//A partir daí, caso a pessoa escolha essa opção, o programa irá imprimir os elementos presentes na lista atual, e a pessoa deverá escrever qual deles deseja remover. ok.
//Depois disso, o programa irá remover o elemento da lista e imprimir a confirmação de que o item realmente não está mais lá. ok.
//Por fim, ele voltará para o ciclo inicial de perguntas. ok.
//Se, na hora de deletar o item, o mesmo não for encontrado na lista, você deverá exibir uma mensagem avisando isso. ok.
//Por exemplo: “Não foi possível encontrar o item dentro da lista!”
//Lembre-se que a opção de remover um item só deverá estar disponível a partir do momento que existir ao menos um elemento dentro da lista de compras. ok.

let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];
let verduras = [];
let continuar = "sim";
let excluir = "";
let alimento = "";
let tipoAlimento = "";


while (continuar != "não") {
    if (frutas.length === 0 && laticinios.length === 0 && congelados.length === 0 && doces.length === 0 && verduras.length === 0) {
        continuar = prompt("Você deseja adicionar uma comida na lista de compras?\nDigite 1- Sim  2- Não.");
    } else {
        continuar = prompt("Você deseja adicionar uma comida na lista de compras?\nDigite 1- Sim  2- Não  3- Excluir");
    }

    while (continuar != "1" && continuar != "2" && continuar != "3") {
        alert(`Operação inválida!!`);
        continuar = prompt("Você deseja adicionar um alimento na lista de compras?\nDigite 1- Sim  2- Não.");
    }
    if (continuar === "2") {
        break;
    }

    if (continuar === "1") {
        alimento = prompt("Qual alimento você deseja inserir na lista de compras?");
        tipoAlimento = prompt("Em qual tipo de alimento essa comida se encaixa: '1-Frutas', '2-Laticínios', '3-Congelados', '4-Doces' ou '5-Verduras' ?");
        if (tipoAlimento == '1') {
            frutas.push(alimento);
        } else if (tipoAlimento == '2') {
            laticinios.push(alimento);
        } else if (tipoAlimento == '3') {
            congelados.push(alimento);
        } else if (tipoAlimento == '4') {
            doces.push(alimento);
        } else if (tipoAlimento == '5') {
            verduras.push(alimento);
        }else {
            alert("Essa categoria não existe.")
        }

    } else if (continuar === "3") {
        if (frutas.length == 0 && laticinios.length == 0 && congelados.length == 0 && doces.length == 0 && verduras.length == 0) {
            alert(`A lista está vazia! Tente novamente!`);
        } else {
            excluir = prompt(`Lista de compras:\n  1-Frutas: ${frutas}\n  2-Laticínios: ${laticinios}\n  3-Congelados: ${congelados}\n  4-Doces: ${doces}\n  5-Veduras: ${verduras}\n\nQual produto você deseja excluir?`);
            if (frutas.indexOf(excluir) != -1) {
                frutas.splice(frutas.indexOf(excluir), 1);
                alert(`O item ${excluir} foi removido da lista de compras!`)
            } else if (laticinios.indexOf(excluir) != -1) {
                laticinios.splice(laticinios.indexOf(excluir), 1);
                alert(`O item ${excluir} foi removido da lista de compras!`)
            } else if (congelados.indexOf(excluir) != -1) {
                congelados.splice(congelados.indexOf(excluir), 1);
                alert(`O item ${excluir} foi removido da lista de compras!`)
            } else if (doces.indexOf(excluir) != -1) {
                doces.splice(doces.indexOf(excluir), 1);
                alert(`O item ${excluir} foi removido da lista de compras!`)
            } else if (verduras.indexOf(excluir) != -1) {
                verduras.splice(doces.indexOf(excluir), 1);
                alert(`O item ${excluir} foi removido da lista de compras!`)
            } else {
                alert(`Não foi possível encontrar o item dentro da lista!`)
            }
        }
    }
}
alert(`Lista de compras:\n  1- Frutas: ${frutas}\n  2- Laticínios: ${laticinios}\n  3- Congelados: ${congelados}\n  4- Doces: ${doces}\n  5- Verduras: ${verduras}`);

