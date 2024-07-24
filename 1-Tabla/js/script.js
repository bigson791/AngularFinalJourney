//seleccionar tabla
const tabla = document.getElementById("validacionTabla");
console.log(tabla)

//seleccionar estado
const estado = document.getElementById("estado");

//Obtener filas
const filas = tabla.getElementsByTagName("tr");

//iterar la tabla

for(let i = 0; i < filas.length; i++){
 // obtener toda la celda de la fila actual
  var celdas = filas[i].getElementsByTagName("td");

  //iterando celdas 
  for(let j=0; j<celdas.length; j++){
    var textoCelda = celdas[j].textContent;

    //validación del texto
    if(textoCelda ==="Activo"){
      celdas[j].classList.add('dato-valido')
    }else if(textoCelda==="Inactivo"){
      celdas[j].classList.add('dato-invalido')
    }

  }
  
}