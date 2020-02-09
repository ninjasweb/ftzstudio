// Funciones Draggable
$(function(){
     $("#draggable").draggable();
});

$(function(){
     $("#draggable2").draggable();
});

$(function(){
     $("#draggable3").draggable();
});

$(function(){
     $(".modal").draggable();
});


//Hora dinámica
new Date($.now());

var dt = new Date();
var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();

window.onload = function(){
    document.getElementById('hora').innerHTML = time;
}

//Modal

// Abrir modal
function showDiv(){
    document.getElementById('modal').style.display = "block";
}
// Cerrar Modal
function closeDiv(){
    document.getElementById('modal').style.display = "none";
}