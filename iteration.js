for (let a = 100; a <= 200; a++) {
    console.log(`a = ${a}`);
    }


for (let a = 100; a <= 200; a++) {
    if (a % 2 == 0) {
      console.log("-");
    } else {
      console.log("*");
    }
}


for (let Start = 0; Start < 10; Start++) {
    for (let NumUp = 1; NumUp <= 10; NumUp++) {
      console.log(NumUp);
    }
}  


let now = new Date(); 
let day = now.getDay();

switch (day) {
    case 0:
    console.log(`Sunday`);
    break;
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log(`Weekday`);
        break;
    case 6:
        console.log(`Saturday`);
        break;
    default:
        console.log(`Unknown`);
        break;
}