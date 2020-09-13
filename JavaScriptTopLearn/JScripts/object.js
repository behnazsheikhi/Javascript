var name="Behnaz";
var family="Sheikhi";
function helloClick(){
   var fullName=name+" "+family;
   alert(fullName);
}
function hello(){
    var fullName=name+" "+family;
    return fullName;
 }
document.getElementById('lblResult').innerHTML=hello();

// definition of object

var person={
    Name:'Behnaz',
    Family:'Sheikhi',
    age:30,
    Description: function(){
        return this.Name+' '+this.Family+' '+this.age
    }
};

console.log(person);
alert(person.Description())