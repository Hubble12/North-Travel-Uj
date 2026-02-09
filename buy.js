let szemelyekszama;
let indulas;
let hazateres;
let szobak;
let email;

function fizetes (){
    //adatbeolvasás
    szemelyekszama = Number(document.getElementById("input1").value)
    indulas = document.getElementById("input2").value
    hazateres = document.getElementById("input3").value
    szobak = Number(document.getElementById("input4").value)
    email = document.getElementById("input5").value


    let tartozkodas1 = 0
    let tartozkodas2 = 0  

    let indulasarray = indulas.split(" ")
    let hazateresarray = hazateres.split(" ")


    let honap1 = indulasarray[0]
    let honap2 = hazateresarray[0]

    let nap1 = indulasarray[1]
    let nap2 = hazateresarray[1]


    console.log(honap1, nap1)
    console.log(honap2, nap2)
    console.log("-----------------------------------------")
    console.log("")

    if (honap1 < 1 || honap1 > 12 || honap2 < 1 || honap2 > 12){  //ELLENŐRIZNI ADATOK HELYESSÉGÉT, HELYES-E VÁLTOZÓ LÉTREHOZÁSA

    }


    //-------------------------------------------------------------------------------------
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
      tartozkodas1 += 31
      tartozkodas1 += 28
      console.log("if 3")
      console.log(tartozkodas1)
    }
    if (honap1 == 4){
      tartozkodas1 += 31
      tartozkodas1 += 28
      tartozkodas1 += 31
      console.log("if 4")
      console.log(tartozkodas1)
    }
    if (honap1 == 5){
      tartozkodas1 += 31
      tartozkodas1 += 28
      tartozkodas1 += 31
      tartozkodas1 += 30
      console.log("if 5")
      console.log(tartozkodas1)
    }
    if (honap1 == 6){
      tartozkodas1 += 31
      tartozkodas1 += 28
      tartozkodas1 += 31
      tartozkodas1 += 30
      tartozkodas1 += 31
      console.log("if 6")
      console.log(tartozkodas1)
    }
    if (honap1 == 7){
      tartozkodas1 += 31
      tartozkodas1 += 28
      tartozkodas1 += 31
      tartozkodas1 += 30
      tartozkodas1 += 31
      tartozkodas1 += 30
      console.log("if 7")
      console.log(tartozkodas1)
    }
    if (honap1 == 8){
      tartozkodas1 += 31
      tartozkodas1 += 31
      tartozkodas1 += 28
      tartozkodas1 += 31
      tartozkodas1 += 30
      tartozkodas1 += 31
      tartozkodas1 += 30
      console.log("if 8")
      console.log(tartozkodas1)
    }
    if (honap1 == 9){
      tartozkodas1 += 31
      tartozkodas1 += 31
      tartozkodas1 += 28
      tartozkodas1 += 31
      tartozkodas1 += 30
      tartozkodas1 += 31
      tartozkodas1 += 30
      tartozkodas1 += 31
      console.log("if 9")
      console.log(tartozkodas1)
    }
    if (honap1 == 10){
      tartozkodas1 += 31
      tartozkodas1 += 31
      tartozkodas1 += 28
      tartozkodas1 += 31
      tartozkodas1 += 30
      tartozkodas1 += 31
      tartozkodas1 += 30
      tartozkodas1 += 31
      tartozkodas1 += 30
      console.log("if 10")
      console.log(tartozkodas1)
    }
    if (honap1 == 11){
      tartozkodas1 += 31
      tartozkodas1 += 31
      tartozkodas1 += 28
      tartozkodas1 += 31
      tartozkodas1 += 30
      tartozkodas1 += 31
      tartozkodas1 += 30
      tartozkodas1 += 31
      tartozkodas1 += 30
      tartozkodas1 += 31
      console.log("if 11")
      console.log(tartozkodas1)
    }
    if (honap1 == 12){
      tartozkodas1 += 31
      tartozkodas1 += 31
      tartozkodas1 += 28
      tartozkodas1 += 31
      tartozkodas1 += 30
      tartozkodas1 += 31
      tartozkodas1 += 30
      tartozkodas1 += 31
      tartozkodas1 += 30
      tartozkodas1 += 31
      tartozkodas1 += 30
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
      tartozkodas2 += 31
      tartozkodas2 += 28
      console.log("if 3")
      console.log(tartozkodas2)
    }
    if (honap2 == 4){
      tartozkodas2 += 31
      tartozkodas2 += 28
      tartozkodas2 += 31
      console.log("if 4")
      console.log(tartozkodas2)
    }
    if (honap2 == 5){
      tartozkodas2 += 31
      tartozkodas2 += 28
      tartozkodas2 += 31
      tartozkodas2 += 30
      console.log("if 5")
      console.log(tartozkodas2)
    }
    if (honap2 == 6){
      tartozkodas2 += 31
      tartozkodas2 += 28
      tartozkodas2 += 31
      tartozkodas2 += 30
      tartozkodas2 += 31
      console.log("if 6")
      console.log(tartozkodas2)
    }
    if (honap2 == 7){
      tartozkodas2 += 31
      tartozkodas2 += 28
      tartozkodas2 += 31
      tartozkodas2 += 30
      tartozkodas2 += 31
      tartozkodas2 += 30
      console.log("if 7")
      console.log(tartozkodas2)
    }
    if (honap2 == 8){
      tartozkodas2 += 31
      tartozkodas2 += 28
      tartozkodas2 += 31
      tartozkodas2 += 30
      tartozkodas2 += 31
      tartozkodas2 += 30
      tartozkodas2 += 31
      console.log("if 8")
      console.log(tartozkodas2)
    }
    if (honap2 == 9){
      tartozkodas2 += 31
      tartozkodas2 += 28
      tartozkodas2 += 31
      tartozkodas2 += 30
      tartozkodas2 += 31
      tartozkodas2 += 30
      tartozkodas2 += 31
      tartozkodas2 += 31
      console.log("if 9")
      console.log(tartozkodas2)
    }
    if (honap2 == 10){
      tartozkodas2 += 31
      tartozkodas2 += 28
      tartozkodas2 += 31
      tartozkodas2 += 30
      tartozkodas2 += 31
      tartozkodas2 += 30
      tartozkodas2 += 31
      tartozkodas2 += 31
      tartozkodas2 += 30
      console.log("if 10")
      console.log(tartozkodas2)
    }
    if (honap2 == 11){
      tartozkodas2 += 31
      tartozkodas2 += 28
      tartozkodas2 += 31
      tartozkodas2 += 30
      tartozkodas2 += 31
      tartozkodas2 += 30
      tartozkodas2 += 31
      tartozkodas2 += 31
      tartozkodas2 += 30
      tartozkodas2 += 31
      console.log("if 11")
      console.log(tartozkodas2)
    }
    if (honap2 == 12){
      tartozkodas2 += 31
      tartozkodas2 += 28
      tartozkodas2 += 31
      tartozkodas2 += 30
      tartozkodas2 += 31
      tartozkodas2 += 30
      tartozkodas2 += 31
      tartozkodas2 += 31
      tartozkodas2 += 30
      tartozkodas2 += 31
      tartozkodas2 += 30
      console.log("if 12")
      console.log(tartozkodas2)
    }

    console.log("tartózkodás2")
    console.log(tartozkodas2)

    tartozkodas2 += Number(nap2)

    console.log("tartózkodás2")
    console.log(tartozkodas2)





    eltoltottnapok = tartozkodas2 -tartozkodas1
    alert(eltoltottnapok) //eltöltött napok száma

    let fizetendo = 30000
    fizetendo = fizetendo*eltoltottnapok*szemelyekszama*szobak

    alert("Fizetendő összeg: " + fizetendo + "Ft")


}


