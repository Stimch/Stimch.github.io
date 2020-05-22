let person = {     // Выводим на экран имя из класс person.
    name: "John",
    age: 25,
}

console.log(person.name);



let day = 2;
switch(day) {
    case 1:
        console.log('Today is Monday!');
        break;
    case 2:
        console.log("Today is Tuesday!");
        break;
}

while (day < 4) {
    console.log(day);
    day = day + 1
}

let count = 1;
for (i = 1; i < 5; i++) {
    count = i;
    console.log(count);
}