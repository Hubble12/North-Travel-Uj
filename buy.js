let szemelyekszama;
let indulas;
let hazateres;
let szobak;
let email;
let fizetendo;
let isAlert = false;



//document.getElementById("uzenetDiv").hidden = true;
document.getElementById("uzenet").innerHTML=""
document.getElementById("okButton").hidden = true;


function okButton(){

  document.getElementById("uzenet").innerHTML=""
  document.getElementById("okButton").hidden = true;

}







function alertinfo (){






  
  if (isAlert == false) {
    let uzenetElement = document.getElementById("uzenet");
    uzenetElement.innerHTML = "Megadott adatok formátuma:<br>" +
                  "Személyek száma: 1-10 személy között szervezünk utat.<br>" +
                  "Indulás és hazatérés ugyan arra az évre vonatkoznak, formátumuk hónap nap<br>" +
                  "pl:  02 08, 2 8, 2 08 vagy 12 18<br>" +
                  "Legfeljebb 5 szobát tudunk lefoglalni.<br>" +
                  "email: @-ot tartalmazzon pontosan egyszer, első és utolsó karakter nem lehet";
    uzenetElement.style.backgroundImage = "linear-gradient(to right, #3B3955,#5cf7ce,#3B3955)";
    uzenetElement.style.borderRadius = "10px";
    uzenetElement.style.color = "white";
    uzenetElement.style.textAlign = "left"; 
    uzenetElement.stylefontFamily = "Georgia,serif";
    uzenetElement.style.padding = "10px";
    uzenetElement.style.fontSize = "24px";
    uzenetElement.style.display = "block"; 

    isAlert = true;
  } else {
    let uzenetElement = document.getElementById("uzenet");
    uzenetElement.innerHTML = "";
    uzenetElement.style.display = "none"; 
    isAlert = false;
  }
}

function GrandHotel(){  //Minden hotelra függvény
  fizetendo = 30000
}
function Amerikalinjen(){
  fizetendo = 20000
}
function Holmenkollen(){
  fizetendo = 33000
}
function Clarion(){
  fizetendo = 36000
}
function GrandHotel2(){
  fizetendo = 40000
}
function EttHem(){
  fizetendo = 18000
}
function atSix(){
  fizetendo = 38000
}
function DenHotel(){
  fizetendo = 28000
}
function Villa(){
  fizetendo = 30000
}
function AcHotel(){
  fizetendo = 40000
}
function BigHotel(){
  fizetendo = 30000
}
function Postmaster(){
  fizetendo = 18000
}
function Appuka(){
  fizetendo = 25000
}
function Aito(){
  fizetendo = 24000
}
function Santa(){
  fizetendo = 30000
}
function Arctic(){
  fizetendo = 27000
}





function fizetes(){


  let uzenetElement = document.getElementById("uzenet")
  //alert(szemelyekszama + " személyre nem tudunk utat szervezni. 10 főre tudunk legfeljebb foglalni.")
  uzenetElement.innerHTML = "Hibás adatok!"
  uzenetElement.style.backgroundImage = "linear-gradient(to right, #3B3955,purple,#5cf7ce)";
  uzenetElement.style.borderRadius = "10px";
  uzenetElement.style.color = "white";
  uzenetElement.style.textAlign = "left"; 
  uzenetElement.stylefontFamily = "Georgia,serif";
  uzenetElement.style.padding = "10px";
  uzenetElement.style.fontSize = "24px";
  uzenetElement.style.display = "block"; 






  let savedName = localStorage.getItem('sharedName');


  if (fizetendo == ""){
    fizetendo = 30000
  }
    //adatbeolvasás
    szemelyekszama = Number(document.getElementById("input1").value)
    indulas = document.getElementById("input2").value
    hazateres = document.getElementById("input3").value
    szobak = Number(document.getElementById("input4").value)
    email = document.getElementById("input5").value

    hotel = document.getElementById("oldal_bal_fel").value
    console.log(hotel)


    let tartozkodas1 = 0
    let tartozkodas2 = 0  

    let indulasarray = indulas.split(" ")
    let hazateresarray = hazateres.split(" ")


    let honap1 = indulasarray[0]
    let honap2 = hazateresarray[0]

    let nap1 = indulasarray[1]
    let nap2 = hazateresarray[1]

    if (honap1.substr[0] == "0"){
      honap1 = honap1.substr[1]
      console.log("Hónap1:--- " + honap1)
    }

    if (honap2.substr[0] == "0"){
      honap2 = honap2.substr[1]
      console.log("Hónap2:--- " + honap2)
    }

    
    if (nap1.substr[0] == "0"){
      nap1 = nap1.substr[1]
      console.log("Nap1:--- " + nap1)
    }

    if (nap2.substr[0] == "0"){
      nap2 = nap2.substr[1]
      console.log("Nap2:--- " + nap2)
    }

    nap1 = Number(nap1)
    nap2 = Number(nap2)
    honap1 = Number(honap1)
    honap2 = Number(honap2)


    console.log(honap1, nap1)
    console.log(honap2, nap2)
    console.log("-----------------------------------------")
    console.log("")

    nap1 = Number(nap1)
    nap2 = Number(nap2)
    honap1 = Number(honap1)
    honap2 = Number(honap2)


    let check1 = 1

    if (honap1 < 1 || honap1 > 12 || honap2 < 1 || honap2 > 12){  //ELLENŐRIZNI ADATOK HELYESSÉGÉT, HELYES-E VÁLTOZÓ LÉTREHOZÁSA
      check1 = 0
      console.log("Hibacheck0")
    }

    if (nap1 < 1 || nap1 > 31 || nap2 < 1 || nap2 > 31){
      check1 = 0
      console.log("Hibacheck01")
    }

    //hónapok napszámai  
    if (honap1 == 1 && nap1 > 31){
      check1 = 0
      console.log("Hibacheck1")
    }
    if (honap1 == 2 && nap1 > 28){  //szökőévente frissíteni
      check1 = 0
      console.log("Hibacheck2")
    }
    if (honap1 == 3 && nap1 > 31){
      check1 = 0
      console.log("Hibacheck3")
    }
    if (honap1 == 4 && nap1 > 30){
      check1 = 0
      console.log("Hibacheck4")
    }
    if (honap1 == 5 && nap1 > 31){
      check1 = 0
      console.log("Hibacheck5")
    }
    if (honap1 == 6 && nap1 > 30){
      check1 = 0
      console.log("Hibacheck6")
    }
    if (honap1 == 7 && nap1 > 31){
      check1 = 0
      console.log("Hibacheck7")
    }
    if (honap1 == 8 && nap1 > 31){
      check1 = 0
      console.log("Hibacheck8")
    }
    if (honap1 == 9 && nap1 > 30){
      check1 = 0
      console.log("Hibacheck9")
    }
    if (honap1 == 10 && nap1 > 31){
      check1 = 0
      console.log("Hibacheck10")
    }
    if (honap1 == 11 && nap1 > 30){
      check1 = 0
      console.log("Hibacheck11")
    }
    if (honap1 == 12 && nap1 > 31){
      check1 = 0
      console.log("Hibacheck12")
    }




    if (honap2 == 1 && nap2 > 31){
      check1 = 0
      console.log("Hibacheck13")
    }
    if (honap2 == 2 && nap2 > 28){  //szökőévente frissíteni
      check1 = 0
      console.log("Hibacheck14")
    }
    if (honap2 == 3 && nap2 > 31){
      check1 = 0
      console.log("Hibacheck15")
    }
    if (honap2 == 4 && nap2 > 30){
      check1 = 0
      console.log("Hibacheck16")
    }
    if (honap2 == 5 && nap2 > 31){
      check1 = 0
      console.log("Hibacheck17")
    }
    if (honap2 == 6 && nap2 > 30){
      check1 = 0
      console.log("Hibacheck18")
    }
    if (honap2 == 7 && nap2 > 31){
      check1 = 0
      console.log("Hibacheck19")
    }
    if (honap2 == 8 && nap2 > 31){
      check1 = 0
      console.log("Hibacheck20")
    }
    if (honap2 == 9 && nap2 > 30){
      check1 = 0
      console.log("Hibacheck21")
    }
    if (honap2 == 10 && nap2 > 31){
      check1 = 0
      console.log("Hibacheck22")
    }
    if (honap2 == 11 && nap2 > 30){
      check1 = 0
      console.log("Hibacheck23")
    }
    if (honap2 == 12 && nap2 > 31){
      check1 = 0
      console.log("Hibacheck24")
    }


    nap1 = Number(nap1)
    nap2 = Number(nap2)
    honap1 = Number(honap1)
    honap2 = Number(honap2)

    if (honap1 > honap2){
      check1 = 0
      console.log("-----------------BugFix-------------------------")
      console.log("Nap1: " + nap1)
      console.log("Nap2: " + nap2)
      console.log("Honap1: " + honap1)
      console.log("Honap2: " + honap2)
      console.log("Hibacheck25")
    }

    if (honap1 == honap2 && nap1 >= nap2){
      check1 = 0
      console.log("-----------------BugFix-------------------------")
      console.log("Nap1: " + nap1)
      console.log("Nap2: " + nap2)
      console.log("Honap1: " + honap1)
      console.log("Honap2: " + honap2)
      console.log("Hibacheck25")
    }

    if (szemelyekszama == "" || szemelyekszama < 1){
      check1 = 0
      console.log("Hibacheck26")
    }

    if (email.substr(email.length - 1) == "@"){
      check1 = 6
      console.log("Hibacheck27")
    }

    
    if(email.charAt(0) == "@"){
      check1 = 7
    }
    
    if(email == ""){
      check1 = 8
    }


    let szamlalo = 0
    for (let i = 0; i <= email.length; i++){
      if (email[i] == "@") {
        szamlalo += 1
      }
    }

    if(szamlalo == 0){
      check1 = 9
    }

    if(szamlalo > 1){
      check1 = 10
    }

    if (email.length == 0){
      check1 = 11
    }




    let userName = document.getElementById("userNameText").innerHTML
    if(userName == ""){
      check1 = 12
    }



    

    if (szobak < 1){
      check1 = 0
      console.log("Hibacheck28")
    }



    if (szemelyekszama >10){
      check1 = 3
    }

    if (szobak > 5){
      check1 = 4
    }

    if (szemelyekszama > 10 && szobak > 5){
      check1 = 5
    }


    if (honap1 == 1){
      tartozkodas1 += 0
      console.log("if 1")
      console.log(tartozkodas1)
    }
    if (honap1 == 2){
      tartozkodas1 += 31
      console.log("if 2")
      console.log(tartozkodas1)
    }
    if (honap1 == 3){
      tartozkodas1 += 59
      console.log("if 3")
      console.log(tartozkodas1)
    }
    if (honap1 == 4){
      tartozkodas1 += 90
      console.log("if 4")
      console.log(tartozkodas1)
    }
    if (honap1 == 5){
      tartozkodas1 += 120
      console.log("if 5")
      console.log(tartozkodas1)
    }
    if (honap1 == 6){
      tartozkodas1 += 151
      console.log("if 6")
      console.log(tartozkodas1)
    }
    if (honap1 == 7){
      tartozkodas1 += 181
      console.log("if 7")
      console.log(tartozkodas1)
    }
    if (honap1 == 8){
      tartozkodas1 += 212
      console.log("if 8")
      console.log(tartozkodas1)
    }
    if (honap1 == 9){
      tartozkodas1 += 243
      console.log("if 9")
      console.log(tartozkodas1)
    }
    if (honap1 == 10){
      tartozkodas1 += 273
      console.log("if 10")
      console.log(tartozkodas1)
    }
    if (honap1 == 11){
      tartozkodas1 += 304
      console.log("if 11")
      console.log(tartozkodas1)
    }
    if (honap1 == 12){
      tartozkodas1 += 334
      console.log("if 12")
      console.log(tartozkodas1)
    }

    console.log("tartózkodás1")
    console.log(tartozkodas1)

    tartozkodas1 += Number(nap1)

    console.log("tartózkodás1")
    console.log(tartozkodas1)

    //SPLIT METÓDUS KELL!!
    //-------------------------------------------------------------------------------------




    console.log("-----------------------------------------")

    if (honap2 == 1){
      tartozkodas2 += 0
      console.log("if 1")
      console.log(tartozkodas2)
    }
    if (honap2 == 2){
      tartozkodas2 += 31
      console.log("if 2")
      console.log(tartozkodas2)
    }
    if (honap2 == 3){
      tartozkodas2 += 59
      console.log("if 3")
      console.log(tartozkodas2)
    }
    if (honap2 == 4){
      tartozkodas2 += 90
      console.log("if 4")
      console.log(tartozkodas2)
    }
    if (honap2 == 5){
      tartozkodas2 += 120
      console.log("if 5")
      console.log(tartozkodas2)
    }
    if (honap2 == 6){
      tartozkodas2 += 151
      console.log("if 6")
      console.log(tartozkodas2)
    }
    if (honap2 == 7){
      tartozkodas2 += 181
      console.log("if 7")
      console.log(tartozkodas2)
    }
    if (honap2 == 8){
      tartozkodas2 += 212
      console.log("if 8")
      console.log(tartozkodas2)
    }
    if (honap2 == 9){
      tartozkodas2 += 243
      console.log("if 9")
      console.log(tartozkodas2)
    }
    if (honap2 == 10){
      tartozkodas2 +=273
      console.log("if 10")
      console.log(tartozkodas2)
    }
    if (honap2 == 11){
      tartozkodas2 += 304
      console.log("if 11")
      console.log(tartozkodas2)
    }
    if (honap2 == 12){
      tartozkodas2 += 334
      console.log("if 12")
      console.log(tartozkodas2)
    }

    console.log("tartózkodás2")
    console.log(tartozkodas2)

    tartozkodas2 += Number(nap2)

    console.log("tartózkodás2")
    console.log(tartozkodas2)

    fizetendo = Number(fizetendo)





    eltoltottnapok = tartozkodas2 -tartozkodas1
    //alert(eltoltottnapok) //eltöltött napok száma
    console.log (eltoltottnapok + "ELTOLTOTTNAPOK")

    //let fizetendo = 30000
    fizetendo = fizetendo*eltoltottnapok*szemelyekszama*szobak
    fizetendo = Number(fizetendo)

    


    if (check1 == 1 && fizetendo > 0){

      let uzenetElement = document.getElementById("uzenet");
      uzenetElement.innerHTML = "Fizetendő összeg: " + fizetendo + "Ft\nNapok száma: " + eltoltottnapok + "\nA megadott email címre küldtük a fizetési jóváhagyást. Ha nem érkezett email, ellenőrizze az email címét!" + "\nKellemes utazást kívánunk " + savedName + "!"
      uzenetElement.style.backgroundImage = "linear-gradient(to right, #4b3d52,#3B3955,#5cf7ce)";
    uzenetElement.style.borderRadius = "10px";
    uzenetElement.style.color = "white";
    uzenetElement.style.textAlign = "left"; 
    uzenetElement.stylefontFamily = "Georgia,serif";
    uzenetElement.style.padding = "10px";
    uzenetElement.style.fontSize = "24px";
    uzenetElement.style.display = "block"; 

      uzenetElement.style.backgroundImage = "linear-gradient(to right, #3B3955,purple,#5cf7ce)";
      uzenetElement.style.borderRadius = "10px";
      uzenetElement.style.color = "white";
      uzenetElement.style.textAlign = "left"; 
      uzenetElement.stylefontFamily = "Georgia,serif";
      uzenetElement.style.padding = "10px";
      uzenetElement.style.fontSize = "24px";
      uzenetElement.style.display = "block"; 
  
      //alert("Fizetendő összeg: " + fizetendo + "Ft\nNapok száma: " + eltoltottnapok + "\nA megadott email címre küldtük a fizetési jóváhagyást. Ha nem érkezett email, ellenőrizze az email címét!" + "\nKellemes utazást kívánunk " + savedName)
    }
    else if (check1 == 3){
      let uzenetElement = document.getElementById("uzenet")
      //alert(szemelyekszama + " személyre nem tudunk utat szervezni. 10 főre tudunk legfeljebb foglalni.")
      uzenetElement.innerHTML = szemelyekszama + " személyre nem tudunk utat szervezni. 10 főre tudunk legfeljebb foglalni."
      uzenetElement.style.backgroundImage = "linear-gradient(to right, #3B3955,purple,#5cf7ce)";
      uzenetElement.style.borderRadius = "10px";
      uzenetElement.style.color = "white";
      uzenetElement.style.textAlign = "left"; 
      uzenetElement.stylefontFamily = "Georgia,serif";
      uzenetElement.style.padding = "10px";
      uzenetElement.style.fontSize = "24px";
      uzenetElement.style.display = "block"; 
    }
    else if (check1 == 4){
      let uzenetElement = document.getElementById("uzenet")
      //alert("Legfeljebb 5 szobát tudunk foglalni.")
      uzenetElement.innerHTML = "Legfeljebb 5 szobát tudunk foglalni."
      uzenetElement.style.backgroundImage = "linear-gradient(to right, #3B3955,purple,#5cf7ce)";
      uzenetElement.style.borderRadius = "10px";
      uzenetElement.style.color = "white";
      uzenetElement.style.textAlign = "left"; 
      uzenetElement.stylefontFamily = "Georgia,serif";
      uzenetElement.style.padding = "10px";
      uzenetElement.style.fontSize = "24px";
      uzenetElement.style.display = "block"; 
    }
    else if (check1 == 5){
      let uzenetElement = document.getElementById("uzenet")
      //alert("Legfeljebb 10 személyt és 5 szobát tudunk feldolgozni.")
      uzenetElement.innerHTML = "Legfeljebb 10 személyt és 5 szobát tudunk feldolgozni."
      uzenetElement.style.backgroundImage = "linear-gradient(to right, #3B3955,purple,#5cf7ce)";
      uzenetElement.style.borderRadius = "10px";
      uzenetElement.style.color = "white";
      uzenetElement.style.textAlign = "left"; 
      uzenetElement.stylefontFamily = "Georgia,serif";
      uzenetElement.style.padding = "10px";
      uzenetElement.style.fontSize = "24px";
      uzenetElement.style.display = "block"; 
    }
    else if(check1 == 6){
      let uzenetElement = document.getElementById("uzenet")
      //alert("Az email nem végzőthet @-ra!")
      uzenetElement.innerHTML = "Az email nem végzőthet @-ra!"
      uzenetElement.style.backgroundImage = "linear-gradient(to right, #3B3955,purple,#5cf7ce)";
      uzenetElement.style.borderRadius = "10px";
      uzenetElement.style.color = "white";
      uzenetElement.style.textAlign = "left"; 
      uzenetElement.stylefontFamily = "Georgia,serif";
      uzenetElement.style.padding = "10px";
      uzenetElement.style.fontSize = "24px";
      uzenetElement.style.display = "block"; 
    }
    else if(check1 == 7){
      let uzenetElement = document.getElementById("uzenet")
      //alert("Az email nem kezdőthet @-al!")
      uzenetElement.innerHTML = "Az email nem kezdőthet @-al!"
      uzenetElement.style.backgroundImage = "linear-gradient(to right, #3B3955,purple,#5cf7ce)";
      uzenetElement.style.borderRadius = "10px";
      uzenetElement.style.color = "white";
      uzenetElement.style.textAlign = "left"; 
      uzenetElement.stylefontFamily = "Georgia,serif";
      uzenetElement.style.padding = "10px";
      uzenetElement.style.fontSize = "24px";
      uzenetElement.style.display = "block"; 
    }
    else if(check1 == 8){
      let uzenetElement = document.getElementById("uzenet")
      //alert("Nem lett email megadva!")
      uzenetElement.innerHTML = "Nem lett email megadva!"
      uzenetElement.style.backgroundImage = "linear-gradient(to right, #3B3955,purple,#5cf7ce)";
      uzenetElement.style.borderRadius = "10px";
      uzenetElement.style.color = "white";
      uzenetElement.style.textAlign = "left"; 
      uzenetElement.stylefontFamily = "Georgia,serif";
      uzenetElement.style.padding = "10px";
      uzenetElement.style.fontSize = "24px";
      uzenetElement.style.display = "block"; 
    }
    else if(check1 == 9){
      let uzenetElement = document.getElementById("uzenet")
      //alert("Az email nem tartalmaz @-ot!")
      uzenetElement.innerHTML = "Az email nem tartalmaz @-ot!"
      uzenetElement.style.backgroundImage = "linear-gradient(to right, #3B3955,purple,#5cf7ce)";
      uzenetElement.style.borderRadius = "10px";
      uzenetElement.style.color = "white";
      uzenetElement.style.textAlign = "left"; 
      uzenetElement.stylefontFamily = "Georgia,serif";
      uzenetElement.style.padding = "10px";
      uzenetElement.style.fontSize = "24px";
      uzenetElement.style.display = "block"; 
    }
    else if(check1 == 10){
      let uzenetElement = document.getElementById("uzenet")
      //alert("Az email több mint egy @-ot tartalmaz!")
      uzenetElement.innerHTML = "Az email több mint egy @-ot tartalmaz!"
      uzenetElement.style.backgroundImage = "linear-gradient(to right, #3B3955,purple,#5cf7ce)";
      uzenetElement.style.borderRadius = "10px";
      uzenetElement.style.color = "white";
      uzenetElement.style.textAlign = "left"; 
      uzenetElement.stylefontFamily = "Georgia,serif";
      uzenetElement.style.padding = "10px";
      uzenetElement.style.fontSize = "24px";
      uzenetElement.style.display = "block"; 
    }
    else if(check1 == 11){
      let uzenetElement = document.getElementById("uzenet")
      //alert("Nem lett email megadva!")
      uzenetElement.innerHTML = "Nem lett email megadva!"
      uzenetElement.style.backgroundImage = "linear-gradient(to right, #3B3955,purple,#5cf7ce)";
      uzenetElement.style.borderRadius = "10px";
      uzenetElement.style.color = "white";
      uzenetElement.style.textAlign = "left"; 
      uzenetElement.stylefontFamily = "Georgia,serif";
      uzenetElement.style.padding = "10px";
      uzenetElement.style.fontSize = "24px";
      uzenetElement.style.display = "block"; 
    }
    else if(check1 == 12){
      let uzenetElement = document.getElementById("uzenet")
      //alert("Nem lett email megadva!")
      uzenetElement.innerHTML = "Nincs bejelentkezve!"
      uzenetElement.style.backgroundImage = "linear-gradient(to right, #3B3955,purple,#5cf7ce)";
      uzenetElement.style.borderRadius = "10px";
      uzenetElement.style.color = "white";
      uzenetElement.style.textAlign = "left"; 
      uzenetElement.stylefontFamily = "Georgia,serif";
      uzenetElement.style.padding = "10px";
      uzenetElement.style.fontSize = "24px";
      uzenetElement.style.display = "block"; 
    }
    else if(eltoltottnapok == 0){
      let uzenetElement = document.getElementById("uzenet")
      //alert("Egy napra nem szervezünk utat!") 
      uzenetElement.innerHTML = "Egy napra nem szervezünk utat!"
      uzenetElement.style.backgroundImage = "linear-gradient(to right, #3B3955,purple,#5cf7ce)";
      uzenetElement.style.borderRadius = "10px";
      uzenetElement.style.color = "white";
      uzenetElement.style.textAlign = "left"; 
      uzenetElement.stylefontFamily = "Georgia,serif";
      uzenetElement.style.padding = "10px";
      uzenetElement.style.fontSize = "24px";
      uzenetElement.style.display = "block"; 
    }
    else{
      let uzenetElement = document.getElementById("uzenet")
      //alert("Hibás adatok lettek megadva! (0)") 
      uzenetElement.innerHTML = "Hibás adatok lettek megadva! (0)"
      uzenetElement.style.backgroundImage = "linear-gradient(to right, #3B3955,purple,#5cf7ce)";
      uzenetElement.style.borderRadius = "10px";
      uzenetElement.style.color = "white";
      uzenetElement.style.textAlign = "left"; 
      uzenetElement.stylefontFamily = "Georgia,serif";
      uzenetElement.style.padding = "10px";
      uzenetElement.style.fontSize = "24px";
      uzenetElement.style.display = "block"; 
    }

    let uzenetHiany = document.getElementById("uzenet").innerHTML

}

