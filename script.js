var sum=0;
str="";
function add(){
    var a = parseInt(document.getElementById("f1").value);
    sum=sum+a;
    if(str==""){
        str+=a;
    }
    else{
        str+="+"+a;
    }
}
function sub(){
    var a = parseInt(document.getElementById("f1").value);
    sum=sum-a;
    if(str==""){
        str+=a;
    }
    else{
        str+="-"+a;
    }
}
function mul(){
    var a = parseInt(document.getElementById("f1").value);
    sum=sum*a;
    if(str==""){
        str+=a;
    }
    else{
        str+="*"+a;
    }
}
function div(){
    var a = parseInt(document.getElementById("f1").value);
    sum=sum/a;
    if(str==""){
        str+=a;
    }
    else{
        str+="/"+a;
    }
}
function equ(){
    document.getElementById("p").innerText=str+"="+sum;
    str="";
    sum=0;
}