const fruits = ["mangos", "Bananas", "Oranges"];
const newfruits = ["Drangonfruit", "Cherrys"];
const mergefruits = [...fruits, ...newfruits];
console.log(mergefruits);

const Names = {
    firstname : "Karthik",
    Age : 22
};

const Allname = {
Surname : "MV",
...Names
};
console.log(Allname);