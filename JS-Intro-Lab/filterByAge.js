function filterAge(minAge, firstName, firstAge, secondName, secondAge) {
    let min = Number(minAge);
    let firstN = firstName;
    let fAge = Number(firstAge);
    let secondN = secondName;
    let sAge = Number(secondAge);

    let personOne = {name:firstN, age: fAge};
    let personTwo = {name:secondN, age: sAge};

    if(personOne.age >= min){
        console.log(personOne);
    }
    if(personTwo.age >= min){
        console.log(personTwo);
    }
}

filterAge([19,'Pesho',119,'Gosho',20]);