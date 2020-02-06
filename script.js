$(function(){
     $("#draggable").draggable();
});

$(function(){
     $("#draggable2").draggable();
});

$(function(){
     $("#draggable3").draggable();
});

// Función aparecer ventana
function abrirVentana() {
    var x = document.getElementById("modal");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function myFunction(){
var x = document.getElementById("modal");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

