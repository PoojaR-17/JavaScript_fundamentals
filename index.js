//Type conversion(Explicit)
function covertToNumber(value){
    return Number(value);
}
console.log(covertToNumber("10"));
console.log(covertToNumber("20.5"));
console.log(covertToNumber(true));
console.log(covertToNumber(false));

function converToString(value1){
    return String(value1)
}
console.log(converToString(123));
console.log(converToString(true));
console.log(converToString([1,2,3]));

function convertAndCompare(a,b){
    if (Number(a) === Number(b)){
        return `Equal after Number conversion :${Number(a)} === ${Number(b)}}`;
    }
    if(String(a) === String(b)){
        return `Equal after String conversion :${String(a)} === ${String(b)}}`;
    }
    return 'not equal after conversion'
}
console.log(convertAndCompare("10",10));
console.log(convertAndCompare(0 ,false));
console.log(convertAndCompare("10","10"));
console.log(convertAndCompare("10",1));
console.log(convertAndCompare("pooja","pooja"));

//type coercion(implicit)
function checkCoercion(a,b){
    console.log(`${a} ==${b}:`,a==b);
    console.log(`${a} === ${b}:`,a ===b);
}
checkCoercion("5",5);
checkCoercion(false,0);
checkCoercion(undefined , null);

function coerceInArithmetic(a,b){
    console.log(`Addition:${a} +${b} =`, a+b);
    console.log(`Substraction:${a} - ${b} =`, a-b);
    console.log(`Multiplication:${a} * ${b} =`, a*b);
    console.log(`Division:${a} / ${b} =`, a/b);
}
coerceInArithmetic("5",2);
coerceInArithmetic("10","4");
coerceInArithmetic(true,3);
coerceInArithmetic(null,4);
coerceInArithmetic(undefined,5);

function coerceInConditionals(value3){
    if(value3){
        console.log(`${value3} is truthy`)
    }
    else{
        console.log(`${value3} is falsy`)
    }
}
coerceInConditionals(true);
coerceInConditionals(false);
coerceInConditionals({});
coerceInConditionals([]);
coerceInConditionals("");
coerceInConditionals("Pooja");
coerceInConditionals(undefined);

//type identification 
function identifyType(value4){
    console.log(`Type of ${value4}:`, typeof value4)
}
identifyType("8");
identifyType(9);
identifyType(true);
identifyType([]);
identifyType({});
identifyType(function(){});

function isArrayOrObject(value5){
    if(Array.isArray(value5)){
        return "Array";
    }else if(typeof value5 ==='object'){
        return 'Object'
    }else {
        return 'Neither Array nor Object'
    }
}
console.log(isArrayOrObject([1,2,3]));
console.log(isArrayOrObject({a:1}));
console.log(isArrayOrObject("Pooja"));

function identifyComplexType(values){
    return values.map(value =>{
        if(Array.isArray(value)){
            return 'Array';
        } else if(value instanceof Function){
            return 'Function';
        } else if(value === null){
            return 'Null';
        }else {
            return typeof value;
        }
       
    })
}
const testValues =[41,"pooja",[1,2,3],{p:1},function(){},[],{},true];
console.log(identifyComplexType(testValues));

//Statement vs Expressions
let result = 2 +2 ;//Expression : the value of 2+2 id evaluated and assigned to 'result'
console.log(result);
for(let i=0;i<2;i++){
    console.log("Pooja")
    //A statement perfoms an action , like declaring variable or using a loop
}


function expressionInFunction(a,b){

    if(Number(a) == Number(b)){
        return `${a} + ${b}`
    }else {
        return `a + b`
    }
}
 console.log(expressionInFunction(2,2));
 console.log(expressionInFunction(3,2));

 function complexExpression(a,b,c){
    let result = a + b * c;
    if (result > 10){
        return `Result is greater than 10`
    } else {
        return `Result is 10 or less than 10`
    }
 }
 console.log(complexExpression(3,4,4));

 //For Loop
 for(let p=0;p<10;p++){
    console.log(p)
 }

 function printArrayElements(arr){
    for(let i=0;i<arr.length;i++){
        console.log(arr[i]);
    }
 }
 printArrayElements(["a","b","c","d"]);

 function complexMultiplicationTable(n){
    const table=[];
    for(let i=1;i<=n;i++){
        const row=[];
        for(let j=1;j<=n;j++){
            row.push(i*j)
        }
        table.push(row)
    }
    return table;
 }
 console.log(complexMultiplicationTable(5))

 //Switch case
 function getDayofWeek(dayNumber){
    switch(dayNumber){
        case 1:
        return 'Monday';
        case 2:
        return 'Tuesday';
        case 3:
        return 'Wednesday';
        case 4:
        return 'Thursday';
        case 5:
        return 'Friday';
        case 6:
        case 7:
            return 'weekend';
    }
 }
 console.log(getDayofWeek(2));
 console.log(getDayofWeek(5));
 console.log(getDayofWeek(3));
 console.log(getDayofWeek(6));

 function classifyAnimal(animal){
    switch(animal){
        case 'dog':
            case 'cat':
                return 'mammal';
                case 'eagle':
                    case 'sparrow':
                        return 'bird';
                        case 'snake':
                            case 'lizard':
                                return 'reptiles';
                                default :
                                return 'unknown classification'
    }
 }
 console.log(classifyAnimal('dog'));
 console.log(classifyAnimal('lizard'));
 console.log(classifyAnimal('eagle'));
 console.log(classifyAnimal('fly'));

 //while loop
let count =1;
while (count <= 5){
    console.log(count);
    count++
}

function countDownFrom(n){
    while (n>=0){
        console.log(n);
        n--;    }
}
countDownFrom(5);

function findFirstEven(numbers) {
    let index = 0;

    while (index < numbers.length) {
        if (numbers[index] % 2 === 0) {
            break;
        }
        index++; 
    }

    
    return index < numbers.length ? numbers[index] : null; 
}

const numbers = [1,2,4,3,5,7,8,9];
const firstEven = findFirstEven(numbers);
console.log(firstEven); 


//Do-while loop
let count1 = 1;

do {
    console.log(count1);
    count1++; 
} while (count1 <= 5);

const readline = require('readline');

function validatePasswordNode() {
    const passwordCriteria = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/; 
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const askPassword = () => {
        rl.question("Please enter your password (at least 8 characters, 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character): ", (password) => {
            if (!passwordCriteria.test(password)) {
                console.log("Password does not meet the criteria. Please try again.");
                askPassword(); 
            } else {
                console.log("Password accepted.");
                rl.close(); 
            }
        });
    };

    askPassword(); 
}


validatePasswordNode();


const readline = require('readline');

function guessNumberNode() {
    const randomNumber = Math.floor(Math.random() * 10) + 1; 
    let attempts = 0;
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const askGuess = () => {
        rl.question("Guess the number (between 1 and 10): ", (guess) => {
            attempts++;

            if (isNaN(guess) || guess < 1 || guess > 10) {
                console.log("Please enter a valid number between 1 and 10.");
                askGuess(); 
            } else if (parseInt(guess) < randomNumber) {
                console.log("Too low! Try again.");
                askGuess(); 
            } else if (parseInt(guess) > randomNumber) {
                console.log("Too high! Try again.");
                askGuess(); 
            } else {
                console.log(`Congratulations! You've guessed the number ${randomNumber} in ${attempts} attempts.`);
                rl.close(); 
            }
        });
    };

    askGuess(); 
}

guessNumberNode();
