formulario.addEventListener("submit", e => {
    e.preventDefault();
    var registro = new Registro(null, formulario.nombre.value, formulario.codigo.value);
    registro.agregar();
    
    formulario.nombre.value = '';
    formulario.codigo.value = '';

    //Hecho con jQuery para hacer menos líneas de código
    $('#ventananuevo').modal('hide');
  });