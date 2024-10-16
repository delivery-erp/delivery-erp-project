export const Adm_btn = function(data){
    if(data==1){
        window.location.href="/";
    }
    else if(data==2){
        window.location.href="/Memberjoin";
    }
}

export const Logins_ck = function(event){
    event.preventDefault();
    var id = document.getElementById("login_id");
    var pass = document.getElementById("login_pass");
    var frm = document.getElementById("frm");
    if(id.value == ""){
        alert("아이디를 입력하세요");
        id.focus();
    }
    else if(pass.value == ""){
        alert("패스워드를 입력하세요");
        pass.focus();
    }
    else{
        frm.submit();
    }
}

export const Id_checkapi = function(){
    alert("API 전송!!");
}

export const Members_check = function(){
    var id = document.getElementById("adm_id");
    if(id.value==""){
        alert("이름을 입력하세요");
        id.focus();
    }
}