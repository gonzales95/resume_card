document.getElementById("eye").addEventListener("click", function(e)
{
    var pwd = document.getElementById("pwd");
    if(pwd.getAttribute("type")=="text"){
    pwd.setAttribute("type","password");
    } else {
    pwd.setAttribute("type","text");
    }
    });
