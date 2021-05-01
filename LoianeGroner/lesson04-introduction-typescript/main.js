/* Command to transpiler: tsc main.ts
 Babel is a transpiler https://babeljs.io/
 Consult:
         http://es6-features.org/#RestParameter
         https://www.typescriptlang.org/docs/handbook/decorators.html
*/
var a = '...';
function myFunction(x, y) {
    return x + y;
}
// ECMASCRIPT 6/2015 Requeri an transpiler to compilar for pure JS. This only to TS
var b = 2;
var PI = 3.14;
var numbers = [1, 2, 3];
numbers.map(function (value) {
    return value * 2;
});
numbers.map(function (value) { return value * 2; });
var TheMath = /** @class */ (function () {
    function TheMath() {
    }
    TheMath.prototype.sum = function (x, y) {
        return x + y;
    };
    return TheMath;
}());
// Is possible define a type to variable and it turn impossible to modify, its will increase the security
var n1 = 'test';
// n1 = 1; // it will generate 'variable type' error 
// but, if declare 'any' or no declare
var n2 = 'test2'; // We can modifier
n2 = 2;
