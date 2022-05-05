let food = ["pizza", "curry", "burger"];
console.log(food);
food.push("taco");
console.log(food);
food[1] = "paella";
console.log(food);
//exo4
//cela fonctionne bien
let fruits = ["banane", "kiwi", "cerise"];
//
fruits[87] = "pomme";
// ['banane', 'kiwi', 'cerise', empty × 84, 'pomme']

//ajouter
// array.push(var)
//supprimer
//array.splice(élément a supprimer, end of elements)

for (var i = 0; i < food.length; i++) {
  console.log("Je savais que tu aimais : " + food[i]);
}
let n = 0;
while (n < food.length) {
  console.log("Je savais que tu aimais : " + food[n]);
  n++;
}
