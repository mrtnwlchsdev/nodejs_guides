/*
    Las promesas representan el resultado eventual de una operacion asincrona
    Una promesa puede tener 3 diferentes estados

        - pendiente :: La operacion asincrona aun no se ha completado
        - rechazada :: La operacion asincrona se ha completado pero ha fallado
        - exitosa :: La operacion asincrona se ha completado y ha sido exitosa
*/
const serverRequest = () => {
    return new Promise((resolve,reject) => {
        return setTimeout(() => {
            const result = false;
            if (result) {
                resolve('Great, the operation is completed!');
            } else {
                reject('Fail!');
            }
        }, 3000)
    })
}

serverRequest()
    .then(resolve => {
        console.log(resolve);
    })
    .catch(error => {
        console.log(error);
    });