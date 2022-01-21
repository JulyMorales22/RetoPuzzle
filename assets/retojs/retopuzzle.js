let btnA1 = document.getElementById("btnA1");
let btnB2 = document.getElementById("btnB2");
let btnC3 = document.getElementById("btnC3");
let btnD4 = document.getElementById("btnD4");
let btnE5 = document.getElementById("btnE5");
let btnF6 = document.getElementById("btnF6");
let btnG7 = document.getElementById("btnG7");
let btnH8 = document.getElementById("btnH8");
let btnI9 = document.getElementById("btnI9");
let btnJ0 = document.getElementById("btnJ0");
let letras = document.getElementById("letras");
let numeros = document.getElementById("numeros");

const botonA1 = () => {
  if (letras.innerHTML == "") {
    letras.innerHTML = "A";
  } else {
    if (letras.innerHTML == "ABCDEFGHIJ" && numeros.innerHTML == "") {
      numeros.innerHTML = "1";
    }
    else if(letras.innerHTML=="ABCDEFGHIJ" && numeros.innerHTML=="1234567890"){
        alert("esta finalizado");
    }
  }

};
const botonB2 = () => {
  if (letras.innerHTML == "A") {
    letras.innerHTML += "B";
  } else {
    if (letras.innerHTML == "ABCDEFGHIJ" && numeros.innerHTML == "1") {
      numeros.innerHTML += "2";
    } else {
      alert(
        "Recuerde que el orden de las letras es alfabetico y el de los numeros es ascendente"
      );
      
    }
    
  }
    
};
const botonC3 = () => {
  if (letras.innerHTML == "AB") {
    letras.innerHTML += "C";
  } else {
    if (letras.innerHTML == "ABCDEFGHIJ" && numeros.innerHTML == "12")
      numeros.innerHTML += "3";
    else {
      alert(
        "Recuerde que el orden de las letras es alfabetico y el de los numeros es ascendente"
      );
    }
  }
};
const botonD4 = () => {
  if (letras.innerHTML == "ABC") {
    letras.innerHTML += "D";
  } else {
    if (letras.innerHTML == "ABCDEFGHIJ" && numeros.innerHTML == "123")
      numeros.innerHTML += "4";
    else {
      alert(
        "Recuerde que el orden de las letras es alfabetico y el de los numeros es ascendente"
      );
    }
  }
};
const botonE5 = () => {
  if (letras.innerHTML == "ABCD") {
    letras.innerHTML += "E";
  } else {
    if (letras.innerHTML == "ABCDEFGHIJ" && numeros.innerHTML == "1234")
      numeros.innerHTML += "5";
    else {
      alert(
        "Recuerde que el orden de las letras es alfabetico y el de los numeros es ascendente"
      );
    }
  }
};
const botonF6 = () => {
  if (letras.innerHTML == "ABCDE") {
    letras.innerHTML += "F";
  } else {
    if (letras.innerHTML == "ABCDEFGHIJ" && numeros.innerHTML == "12345")
      numeros.innerHTML += "6";
    else {
      alert(
        "Recuerde que el orden de las letras es alfabetico y el de los numeros es ascendente"
      );
    }
  }
};
const botonG7 = () => {
  if (letras.innerHTML == "ABCDEF") {
    letras.innerHTML += "G";
  } else {
    if (letras.innerHTML == "ABCDEFGHIJ" && numeros.innerHTML == "123456")
      numeros.innerHTML += "7";
    else {
      alert(
        "Recuerde que el orden de las letras es alfabetico y el de los numeros es ascendente"
      );
    }
  }
};
const botonH8 = () => {
  if (letras.innerHTML == "ABCDEFG") {
    letras.innerHTML += "H";
  } else {
    if (letras.innerHTML == "ABCDEFGHIJ" && numeros.innerHTML == "1234567")
      numeros.innerHTML += "8";
    else {
      alert(
        "Recuerde que el orden de las letras es alfabetico y el de los numeros es ascendente"
      );
    }
  }
};
const botonI9 = () => {
  if (letras.innerHTML == "ABCDEFGH") {
    letras.innerHTML += "I";
  } else {
    if (letras.innerHTML == "ABCDEFGHIJ" && numeros.innerHTML == "12345678")
      numeros.innerHTML += "9";
    else {
      alert(
        "Recuerde que el orden de las letras es alfabetico y el de los numeros es ascendente"
      );
    }
  }
};
const botonJ0 = () => {
  if (letras.innerHTML == "ABCDEFGHI") {
    letras.innerHTML += "J";
  } else {
    if (letras.innerHTML == "ABCDEFGHIJ" && numeros.innerHTML == "123456789")
      numeros.innerHTML += "0";
    else {
      alert(
        "Recuerde que el orden de las letras es alfabetico y el de los numeros es ascendente"
      );
    }
  }
};

btnA1.onclick = function () {
  botonA1();
};
btnB2.onclick = function () {
  botonB2();
};
btnC3.onclick = function () {
  botonC3();
};
btnD4.onclick = function () {
  botonD4();
};
btnE5.onclick = function () {
  botonE5();
};
btnF6.onclick = function () {
  botonF6();
};
btnG7.onclick = function () {
  botonG7();
};
btnH8.onclick = function () {
  botonH8();
};
btnI9.onclick = function () {
  botonI9();
};
btnJ0.onclick = function () {
  botonJ0();
};
