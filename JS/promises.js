const usuarioVerificado = new Promise ( (resolve, reject) => {
    const verif = true;

    if(verif) {
        resolve('Usuario Verificado'); // El promise se cumple
    } else {
        reject('No se pudo iniciar sesión'); // El promise no se cumple
    }
}); 

usuarioVerificado
    .then( (resultado) => console.log(resultado))
    .catch( (error) => console.log(error))


/* Cuando se ejecuta un promise se pasan dos valores automáticamente: resolve y reject
Cuando el promise se cumple, siempre se ejecuta el resolve, si no se cumple, se ejecuta el reject.
En los promises existen 3 estados distintos:
Pending: No se ha cumplido pero tampoco se ha rechazado, falta algo más por hacer
Fulfilled: Se ha cumplido
Reject: Se ha rechazado */