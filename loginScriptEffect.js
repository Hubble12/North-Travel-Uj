let savedName = localStorage.getItem('sharedName');
console.log(savedName);
document.getElementById("userNameText").innerHTML=savedName

function logOut(){
    savedName=""
    localStorage.setItem('sharedName', "")
    document.getElementById("userNameText").innerHTML = ""
}