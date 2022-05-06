let x = "hello from main module";

function calculator(a,b){
    let z = a + b;
    return z; 
}

export default{x, calculator}
module.export = {x, calculator};