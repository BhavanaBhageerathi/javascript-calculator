var add=function(event){
    firstnumber=Number(document.getElementById('firstnumber').value);
    secondnumber=Number(document.getElementById('secondnumber').value);

    result=firstnumber+secondnumber;
    document.getElementById("result").value = result;
}
var sub=function(event){
    firstnumber=Number(document.getElementById('firstnumber').value);
    secondnumber=Number(document.getElementById('secondnumber').value);
    result=firstnumber-secondnumber;
    document.getElementById("result").value = result;
}
var mul=function(event){
    firstnumber=Number(document.getElementById('firstnumber').value);
    secondnumber=Number(document.getElementById('secondnumber').value);
    result=firstnumber*secondnumber;
    document.getElementById("result").value = result;
}
var divide=function(event){
    firstnumber=Number(document.getElementById('firstnumber').value);
    secondnumber=Number(document.getElementById('secondnumber').value);
    result=firstnumber/secondnumber;
    document.getElementById("result").value = result;
}
var cancelfield=function(event){
   firstnumber=Number(document.getElementById('firstnumber').value="");
    secondnumber=Number(document.getElementById('secondnumber').value="");
    document.getElementById("result").value =""; 
}
