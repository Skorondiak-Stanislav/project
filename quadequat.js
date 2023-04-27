let x1 = Math.floor(Math.random() * 10) + 1;
let x2 = Math.floor(Math.random() * 10) + 1;

function createQuadraticEquationUsingVietasFormula(x1, x2) {

    let a = 1;      
    let b = -(x1 + x2);
    let c = x1 * x2;
    
    let equation = a + "x^2 + " + b + "x + " + c + " = 0";
      
    return equation;
}

let equation = createQuadraticEquationUsingVietasFormula(x1, x2);
console.log("Квадратне рівняння:", equation);