

function saysomething(){
    console.log("hello world to Javascript ! ");
}


let sayhi = function(){
    console.log("Let me say hi to you ! ");
}
sayhi();

//function with parameter
const fun = function(){
    console.log("hello");
}
fun();

// object
let namez = {
    name1 : "hong",
    name2 : "leangseng",
    name3 : 'Kunitha',
    age: 20
}

function changepercent(name,name1){
    document.getElementById('changepercent').innerHTML = name+"ANd "+ name1;
}
changepercent(namez.name3);


// method in object
 let person = {
      firstname : 'ly',
      lastname: 'leangseng',
      age:20,
      showIformation: function(){
        changepercent(this.lastname);
      }
 }
person.showIformation();



// pass object to function
// create function
// change age 
let changeage= function(Obj){
    Obj.age = 100;
    Obj.firstname = 'Ah ja leang';
}
changeage(person);
changepercent(person.age,person.firstname);
