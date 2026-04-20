/*import { open } from 'node:fs/promises';

function read(){
    myFileReader();
    async function myFileReader() {
        const file = await open('./TextFileName.txt');
        for await (const line of file.readLines()) {
            console.log(line)
        }
    }
    
}
*/






function loginFunction(){
    let userNames = ["Sanyi90", "Attila5", localStorage.getItem('regName')]
    let passwords = ["1234", "tesztjelszo", localStorage.getItem('regPass')]
    console.log(userNames)
    console.log(passwords)

    


    let inputName = document.getElementById("input1").value
    let inputPassword = document.getElementById("passwordInput").value
    let result = false

    for (let i = 0; i< userNames.length; i++){
        if(inputName == userNames[i] && inputPassword == passwords[i]){
            result = true
        }
    }
    if(result == true){
        window.location.href = "index.html"
        let uName = inputName;
        localStorage.setItem('sharedName', uName);
    }
    else{
        document.getElementById("uzenet").innerHTML="Hibás felhasználónév vagy jelszó."
    }
}

function elfelejtettJelszo(){
    document.getElementById("uzenet").innerHTML="Elfelejtett jelszó funkció nem elérhető."
}


