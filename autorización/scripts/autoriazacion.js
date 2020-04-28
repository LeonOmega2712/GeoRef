const formaingresar = document.getElementById('formaingresar');

formaingresar.addEventListener('submit', (e) => {
    e.preventDefault();

    let correo = formaingresar['correo'].value
    let contrasena = formaingresar['contrasena'].value;

    auth.signInWithEmailAndPassword(correo, contrasena).then(cred => {
        console.log(cred);

        $('#ingresarmodal').modal('hide');
        formaingresar.reset();
        formaingresar.querySelector('.error').innerHTML = '';

    }).catch(err => {
        formaingresar.querySelector('.error').innerHTML = mensajeError(err.code);
        console.log(err);
    });
});

function mensajeError(codigo) {
    let mensaje = '';

    switch (codigo) {
        case 'auth/wrong-password':
            mensaje = 'Su contrasena es incorrecta';
            break;
        case 'auth/user-not-found':
            mensaje = 'Usuario no encontrado';
            break;
        case 'auth/weak-password':
            mensaje = 'Constraseña débil';
            break;
        default:
            mensaje='Ocurrió un error con este usuario';

    }
    return mensaje;
}


const salir = document.getElementById('salir');

salir.addEventListener('click', (e) => {
    e.preventDefault();

    auth.signOut().then(() => {
        alert('El usuario ha salido del sistema');
    });
})