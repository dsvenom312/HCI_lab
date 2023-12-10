var errorline = document.getElementById("error-line");
errorline.innerHTML = "";

function formvalidation(e){

    e.preventDefault();

    var form = document.getElementById("register-form");

    var name = document.getElementById("name").value ;
    var dob = document.getElementById("dob").value ;
    var pass = document.getElementById("pass").value ;
    var email = document.getElementById("email").value ;
    var male = document.getElementById("male").checked;
    var female = document.getElementById("female").checked;

    var hasuppercase = false;
    var haslowercase = false;
    var hasnumber = false;

    //huruf kapital di cek ada apa kgk
    for(let i=0; i< pass.length;i++){
        if(pass[i] >= 'A' && pass[i] <= 'Z'){
            hasuppercase = true;
        }else if(pass[i] >= 'a' && pass[i] <= 'z'){
            haslowercase = true;
        }else if(pass[i] >= '0' && pass[i] <= '9'){
            hasnumber = true;
        }
    }

    var emailarr = email.split('@');
    var domain = emailarr[1]; // mau ambil gmail.com nya

    var inputdate = new Date(dob);
    var today = new Date(); // bakal return tanggal hari ini

    
    
    

    if(name == ""){
        errorline.innerHTML = "Name must not empty"
    }
    else if(dob == ""){

        errorline.innerHTML = "DOB must not empty"
    }
    else if(inputdate > today){
        errorline.innerHTML = "jidat mu lahir disana"

    }
    else if(pass == ""){

        errorline.innerHTML = "pass must not empty"
    }
    else if(hasuppercase == false){

        errorline.innerHTML = "pass must have atleast 1 uppercase letter"

    }
    else if(haslowercase == false){

        errorline.innerHTML = "pass must have atleast 1 lowercase letter"

    }
    else if(hasnumber == false){

        errorline.innerHTML = "pass must have atleast 1 number"

    }
    else if(pass.length < 8){
        errorline.innerHTML = "pass must have 8 digit or more"

    }
    else if(email == ""){

        errorline.innerHTML = "email must not empty"
    }
    else if(domain != "gmail.com"){
        errorline.innerHTML = "domain email must gmail.com"

    }
    else if(!male && !female){

        errorline.innerHTML = "genda must not empty"

    }else{
        alert("success asdasdasdasdasdasdadsaasdasdasds");
        errorline.innerHTML = "";

        form.reset();
    }
    






}