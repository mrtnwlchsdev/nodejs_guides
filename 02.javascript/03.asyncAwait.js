/*
    La palabra async permite definir una funcion asincrona que retornara una promesa
    La palabra await permite detener la ejecucion de una funcion asincrona hasta que la o las promesas dentro de dicha funcion sean completadas
    Mediante await es posible asignar el valor de resolucion de una promesa a una variable
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

/*
    El bloque try...catch es implementado dentro de las funciones async para controlar los eventuales fallos que puedan ocurrir durante la ejecucion de la operacion asincrona

        try :: Ejecuta el codigo en caso de que la promesa sea resuelta exitosamente
        catch :: Captura el error que provoca el rechazo de la operacion asincrona
*/

const serverRequestHandle = async () => {
    try {
        const response = await serverRequest();
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
serverRequestHandle()
