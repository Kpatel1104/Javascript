// console.log("khyati Patel");

// Comments
// this is js page

/*  js
script.js file
*/

/* Vriables */

// let is a keyword a is a variable

/* var  */
var name1 = "Kpatel";

var name1 = "khyati patel";

// console.log(name1);

// let 

let name2 = "khyati patel";

name2 = "Kpatel";

// console.log(name2);

// Const 

const name3 = "kittu"
// name3 = "patel"
// console.log(name3);

/* Implicit Type Conversion */

// result='1'+null
// result='1'- 1
// result='3'- null
// result='1'+ 'Hello'
// console.log(result);
// console.log(typeof result);

/* Explicit Type Conversion */

result1=20.222
// result=String(result1);
result=parseInt(result1);
// console.log(result);
// console.log(typeof result);


/* Operators */
// Arithmetic Operator

// console.log(10+5)
// console.log(10-5)
// console.log(10*5)
// console.log(10/5)
// console.log(11%5)
// console.log(10**5)


/* Incr_Dec Operator */

// let a=1;
// a=a+1;
// a++;
// ++a;
// console.log(a++);
// console.log(a);


/* Comparison Operator */


// a=6;
// b=6;

// console.log(a==b);
// console.log(a!=b);
// console.log(a>b);
// console.log(a<b);
// console.log(a>=b);
// console.log(a<=b);


// == (not compare datatype) vs === (also compare datatype)

c="8";
d=8;
// console.log(c===d);
// console.log(c!==d);

/* Logical Operator */

// Logical OR 

console.log(4>3 || 3>4);

// AND 

console.log(2>3 && 5>4);

// NOT 

console.log(!false);

// CONDITIONAL

/* if else */

let age=21;

if(age>=18){
    console.log("You Are Eligible")
}
else{
    console.log("You Are Not Eligible")
}

/*  else if */

let a=20;
let b=20;

if(a>b){
    console.log("A is Greater");
}else if(b>a)
{
    console.log("B is greater");
}
else{
    console.log("Both Are Equal");
}


/*  Switch */

let ch=3;
switch(ch){

    case 0 :
    console.log(" I Am 0 ");
    break;

    case 1 :
    console.log(" I Am 1 ");
    break;

    case 2 :
    console.log(" Not Match ");
    break;

}
