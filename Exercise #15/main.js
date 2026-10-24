
let people = [
    { name: "Libaan ", age: 25, city: "Xamar" },
    { name: "MC", age: 30,City:"Afgooye" }
];

for (let person of people) {
    console.log("Properties and values of each person:");

    for (let [key, value] of Object.entries(person)) {
        console.log(`${key}: ${value}`);
    }

    console.log("---");
}
