var palyak;
palyak = [
    {id:1},
    {id:2},
    {id:3},
    {id:4},
    {id:5}
]
 
kepek = [
    {id:1,value:"karakterek/1.png"},
    {id:2,value:"karakterek/2.png"},
    {id:3,value:"karakterek/3.png"},
    {id:4,value:"karakterek/4.png"},
    {id:5,value:"karakterek/5.png"}
]

function veletlenszam(also, felso) {
    return Math.floor(Math.random()*(felso-also+1)+also);
}



function valasztas(){
    
    let jatekk = document.getElementById("jatek");
    let valasztomenu = document.createElement("div");
    
    valasztomenu.innerHTML="<p>Válassz pályát!</p>";
    valasztomenu.innerHTML="<br>";
    valasztomenu.classList.add("valasztasmenu");
    
    var tabla = document.createElement("table");
    var tr = document.createElement("tr");
    for (let i = 1; i < 6; i++) 
    { 
        let td=document.createElement("td");
        td.dataset.map = "palya"+i+".html"
        let kep = document.createElement("img");
        kep.src = "karakterek/"+ i+ ".png";
        kep.classList.add("figurakep");
        td.appendChild(kep);
        td.setAttribute("onclick","kattint(this)");
        tr.appendChild(td);
        
    }
    tabla.appendChild(tr);
    valasztomenu.appendChild(tabla);
    jatekk.appendChild(valasztomenu);
}

function kattint(td)
{
    console.log(td);
    open(td.dataset.map,"_self");
}

function megnyit(hova){

}


function info(){
    open("info.html", "_self");
  }
  

valasztas();