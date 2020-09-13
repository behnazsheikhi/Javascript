// function
function test(){
    var name='Behnaz';
    var age=32
    alert(name)
}
// list 
var names=['Behnaz','Alireza','Abed','Bahar']
document.write('<br/>')
document.write(names[3],'<br/>')
document.write(names.length,'<br/>')
var nameSort=names.sort()
document.write('<br/>')
console.log(nameSort)


var result=document.getElementById('lblResult');
// result.innerHTML="hiiiiiiiiiiii"     

function addition(){
    // parseInt creates value to integer 

    var number1=parseInt(document.getElementById('num1').value);
    var number2=parseInt(document.getElementById('num2').value);

    var addition=number1+number2;
    result.innerHTML=addition;
}