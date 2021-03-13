// tady je místo pro náš program

/**
 * Sečte dvě čísla na vstupu a vrátí výsledek
 *
 * @param {int} a
 * @param {int} b
 */

 function secti(a, b) {
  let vysledek = a + b;
  document.querySelector("#vysledek").innerHTML=vysledek;  
}

/**
 * Upozorní uživatele při spuštění.
 */

function upozorni() {
  alert("Gratulace, právě jsi spustila tuto funkci!");
  console.log("Gratulace, právě si spustila tuto funkci!");
  document.querySelector(".ctverecek").innerHTML="Gratulace, právě si spustila tuto funkci!";
  document.querySelector(".ctverecek").style.width="500px";
}


function zmenBarvu() {
  document.querySelector(".ctverecek").style.backgroundColor = "green"; 
}
