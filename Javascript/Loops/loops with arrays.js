//loops with arrays
let fruits = ["mango", "banana", "orange", "litchi", "papaya"];
fruits.push("pineapple");
fruits.unshift("guava");
console.log("reverse order of fruits");
for (let i = fruits.length - 1; i >= 0; i--) {
    console.log(i, fruits[i]);
}
console.log("sequential order of fruits");
for (let i = 0; i < fruits.length; i++) {
    console.log(i, fruits[i]);
}

//nested loops with nested arrays
let heroes = [["ironman", "spiderman", "thor"],
["superman", "wonder man", "flash"]
];

for (let i = 0; i < heroes.length; i++) {
    console.log(`List #${i}`);
    for (j = 0; j < heroes[i].length; j++) {
        console.log(heroes[i][j]);
    }
}

//for of loop
console.log("Use of for of loop");
let names = ["sudha","swati","saakshi","sushma","shruti","indu"];

for(name of names){
    console.log(name);
}
//nested for of loop
console.log("Use of nested for of loop");
let details = [["aman",23],["sam",44],["sushant",67]];

for(lists of details){
    for(info of lists){
        console.log(info);
    }
}