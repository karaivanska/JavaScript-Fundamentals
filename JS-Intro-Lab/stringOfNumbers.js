function stringOfNumbers(args) {
    let result = '';
    let endNum = Number(args);
    for(i = 1; i <= endNum; i++){
        result += i;
    }
    console.log(result);
}

stringOfNumbers(['101']);