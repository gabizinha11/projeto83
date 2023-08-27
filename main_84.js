// de o nome apropriado ao id como pizzaName
var item = document.getElementById("pizzaName").value;
//adicione a função push() para empurrar o item no array
pizzaListArray.push(item);
menulistArray = [ "Pizza Chocolate",
                "Pizza Calabresa",
                "Pizza Quatro Queijos",
                "Pizza Milho Com Bacon",
                "Pizza Portuguesa",
                "Pizza Frango"]; //Nomes das Pizzas
//De um nome apropriado ao id como displayMenu 
document.getElementById("DisplayMenu").innerHTML = htmldata;
function add_suggestion(){
//De o nome de um id apropriado, como addItem
var item = document.getElementById ("menulistArray").value;
//Use a função push() para colocar o item no menuListArray
menulistArray.push(item);
}

