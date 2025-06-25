const Fruits = ["Mangos", "Oranges", "Bananas"];
console.log(Fruits[0]);

Fruits.push("Apples");
console.log(Fruits);

const pandu = Fruits.findIndex((Item) => {
return Item === "Bananas";
});
console.log(pandu);
