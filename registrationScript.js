function registrationFunction(){

    let accountInfo ="F"
    console.log(accountInfo)


    accountInfo = localStorage.getItem('isThereAccount')

    console.log(accountInfo)
    
    let inputName = document.getElementById("input3").value
    let inputPassword = document.getElementById("input4").value
    console.log(inputName)
    console.log(inputPassword)
    //let result


    console.log(inputName.length)
    console.log(inputPassword.length)
    if(inputName.length == 0 || inputPassword.length == 0 || document.getElementById("input4").value != document.getElementById("input5").value){
        result = false
    }
    else{
        result = true
    }
//----------------------------
    console.log(accountInfo)
    if(result == true && accountInfo == null){
        console.log("eredmeny1")
        localStorage.setItem('regPass', inputPassword)
        localStorage.setItem('regName', inputName)
        localStorage.setItem('isThereAccount', "T")
        window.location.href = "index.html"
    }
    else if(result == true && accountInfo == "T"){
        console.log("eredmeny2")
        document.getElementById("uzenet").innerHTML = "Már létrehoztál egy fiókot!"
    }
    else{
        console.log("eredmeny3")
        document.getElementById("uzenet").innerHTML = "Hibás adatok lettek megadva!"
    }
}

function deleteProfile(){
    localStorage.clear()
    localStorage.setItem('sharedName', "")
    window.location.href = "index.html"
}