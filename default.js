function add(num1 ,num2 = 20) {
    // method 1:::::
    // if(num2 == undefined){
    //     num2 = 0;
    // }
    // method 2 ::::
    // num2 = num2 || 20;
    return num1 + num2;
    }
const total = add(15);
console.log(total);
// default parameter is very usefull for a function... coz jodi ami string expect kori,se khetre empty string er akta default value diye dea jabe