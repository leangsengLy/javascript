const number = [10,20,30,40];
console.log(number);

for( var a of number){
        console.log(a);
}

const newNumber = number.filter(less);

function less(values){
        return values < 30;
}

for( var a of newNumber){
        console.log(a);
}

var d = new Date();

console.log(d.getFullYear());


// random
let aa = Math.floor(Math.random()*100);
console.log(aa);

