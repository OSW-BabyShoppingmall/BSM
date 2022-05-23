var code=999999;

function doubleCheck(){
    var id=document.getElementById("id").value;
    console.log(id);
    if(id===""){
        alert("please input information");
    }
    else{
    alert("You can sign up");
    }
}

function getCode(){
    code=Math.floor(Math.random()*10**6);
    alert("varification code: "+code);
}

function agreeAll(){
  

}

function moveLogin(){
    location.href="../html/login.html";
  }



function signUp(){
    var id=document.getElementById("id").value;
    var pwd1=document.getElementById("password_1").value;
    var pwd2=document.getElementById("password_2").value;
    var name=document.getElementById("name").value;
    var year=document.getElementById("year").value;
    var day=document.getElementById("day").value;
    var phone=document.getElementById("phone").value;
    var usercode=document.getElementById("code").value;
    var checkboxes=document.getElementsByClassName("terms");
    var molla=document.getElementById("term1");
    var checkpass=1;

    if(id!="" && pwd1!="" && pwd2!="" && name!="" && year!="" 
    && day!="" && phone!="" && usercode!=""){
        if(pwd1==pwd2 && code==usercode){
            var i=0;
            for(i; i<checkboxes.length; i++){
                console.log(checkboxes[i].getAttribute("checked"));
                if(checkboxes[i].getAttribute("checked")=="false"){
                    checkpass=0;
                    console.log("in a loop"+checkpass);
                }
            }
            console.log(checkpass);
            if(checkpass==1){
            alert("pass");
            }
            else{
                alert("Please agree terms of services");
            }
        }
        else if(pwd1!=pwd2){
            alert("password is different");
        }
        else if(code!=usercode){
            alert("verification code is different");
        }
        
    }
    else{
        var i=0;
        var what=molla.getAttribute("checked")
            console.log(what);
        
        alert("Please input information correctly");
    }


}
