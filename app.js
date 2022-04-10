var frutas = []
var laticineos = []
var vegetais = []
var guloseimas = []
var geral = []
var selec = ""
var index = prompt("Deseja iniciar uma nova lista? Sim ou Nao")

while (index == "Sim"){
    var produto = prompt("Digite o nome do produto que desejar adicionar a sua lista: ")
    var msg = prompt("Em qual lista deseja adicionar? 1 - frutas, 2 - laticineos, 3 - vegetais, 4 - guloseimas, 5 - geral, Digite o numero da lista!")
    incluir(msg, produto)
    index = prompt("Deseja incluir mais produtos a sua lista? Sim ou Nao")
    if (index == "Nao"){
        index = prompt("Deseja EXCLUIR algum produto da lista? Sim ou Nao")
        while (index == "Sim"){
            excluir()
            index = prompt("Deseja EXCLUIR mais algum produto da lista? Sim ou Nao")
        }
    }
}

function incluir(msg, produto){
    switch (msg){
        case "1":
        frutas.push(produto)
        break
        case "2":
        laticineos.push(produto)
        break
        case "3":
        vegetais.push(produto)
        break
        case "4":
        guloseimas.push(produto)
        break
        case "5":
        geral.push(produto)
        break
        default:
        alert("Voce digitou uma opçao invalida")
    }
}

function excluir(){
    selec = prompt("De qual lista voce deseja exlcuir? 1 - frutas, 2 - laticineos, 3 - vegetais, 4 - guloseimas, 5 - geral, Digite o numero da lista!: ")
    if (selec == 1){
        alert(frutas)
        produto = prompt("Qual produto vc deseja excluir?")
        frutas.splice(frutas.indexOf(produto), 1)
    }
    else if (selec == 2){
        alert(laticineos)
        produto = prompt("Qual produto vc deseja excluir?")
        laticineos.splice(laticineos.indexOf(produto), 1)
    }
    else if (selec == 3){
        alert(vegetais)
        produto = prompt("Qual produto vc deseja excluir?")
        vegetais.splice(vegetais.indexOf(produto), 1)
    }
    else if (selec == 4){
        alert(guloseimas)
        produto = prompt("Qual produto vc deseja excluir?")
        guloseimas.splice(guloseimas.indexOf(produto), 1)
    }
    else if (selec == 5){
        alert(geral)
        produto = prompt("Qual produto vc deseja excluir?")
        geral.splice(geral.indexOf(produto), 1)
    } 
    else {
        alert("Voce digitou uma opcao invalida!")
    }
}

frutas.sort()
laticineos.sort()
vegetais.sort()
guloseimas.sort()
geral.sort()

alert(`Voce adicionou os seguintes produtos\n  Frutas: ${frutas}\n  Laticineos: ${laticineos}\n  Vegetais: ${vegetais}\n  Guloseimas: ${guloseimas}\n  Gerais: ${geral}`)