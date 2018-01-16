function distance(arg1, arg2, arg3, arg4){
    let x1 = Number(arg1);
    let y1 = Number(arg2);
    let x2 = Number(arg3);
    let y2 = Number(arg4);

    return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
}

console.log(distance(2.34, 15.66, -13.55, -2.9985));