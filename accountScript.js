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


let userNames = ["u1", "u2"]
let passwords = ["p1", "p2"]

function loginFunction(){
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
    }
    else{
        
    }
}