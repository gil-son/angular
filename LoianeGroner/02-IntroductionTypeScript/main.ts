/* Command to transpiler: tsc main.ts
 Babel is a transpiler https://babeljs.io/
 Consult:
         http://es6-features.org/#RestParameter
         https://www.typescriptlang.org/docs/handbook/decorators.html
*/
var a = '...';

function myFunction(x, y){
    return x+y;
}

// ECMASCRIPT 6/2015 Requeri an transpiler to compilar for pure JS. This only to TS

let b = 2;
const PI = 3.14;


var numbers  = [1,2,3];

numbers.map( function(value) {
    return value * 2;
});

numbers.map( value => value * 2);

class TheMath{
    sum(x,y){
        return x+y;
    }
}

// Is possible define a type to variable and it turn impossible to modify, its will increase the security
var n1: string = 'test';
// n1 = 1; // it will generate 'variable type' error 

// but, if declare 'any' or no declare

var n2: any = 'test2'; // We can modifier
n2 = 2;