
function getlabel(tag,attributename,attributevalue,content){
    var label=document.createElement(tag);
    label.setAttribute(attributename,attributevalue)
    label.innerHTML=content;
    return label;

}
function inputvalue(tag,attributename,attributevalue,attributename1,attributevalue1){
    var input=document.createElement(tag);
    input.setAttribute(attributename,attributevalue)
    input.setAttribute(attributename1,attributevalue1)
    return input;
}
function linebreak(breaker){
    var b=document.createElement(breaker);
    return b;

}
var fname=getlabel("label","for","firstname","Firstname")
var b1=linebreak("br");
var inputfname=inputvalue("input","type","text","id","firstname")
var b2=linebreak("br")
var lname=getlabel("label","for","lastname","Lastname")
var b3=linebreak("br");
var inputlname=inputvalue("input","type","text","id","lastname")
var b4=linebreak("br")
var email=getlabel("label","for","email","Email")
var b5=linebreak("br");
var inputmail=inputvalue("input","type","email","id","email")
var b6=linebreak("br")
var number=getlabel("label","for","phonenumber","Phonenumber")
var b7=linebreak("br");
var inputnumber=inputvalue("input","number","phonenumber","id","phonenumber")
var b8=linebreak("br");
var button=getlabel("button","type","button","click me")
document.body.append(fname,b1,inputfname,b2,lname,b3,inputlname,b4,email,b5,inputmail,b6,number,b7,inputnumber,b8,button);