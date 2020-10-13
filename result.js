document.getElementById("ecv").innerHTML=localStorage.getItem("userName"); 

function yourapp(){
    let loginType=localStorage.getItem("userName");
    if(loginType.match(/[0-9]/i)){
        document.getElementById("type").innerHTML='Students login';
    } 
    else{
        document.getElementById("type").innerHTML='Faculty login';   
    }
    let user=loginType.trim().split('@')
    document.getElementById("userId").innerHTML=user[0];
     
} 
yourapp(); 