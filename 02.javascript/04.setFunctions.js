/*
    La funcion setInterval() ejecuta un bloque de forma en un intervalo de tiempo especificado
    En el siguiente ejemplo se imprime un mensaje en consola cada 3 segundos
*/
setInterval(() => {
    console.log('Interval');
}, 3000);

/*
    La funcion setTimeOut() ejecuta un bloque de codigo con un retraso de tiempo especificado
    En el siguiente ejemplo se imprime un mensaje en consola con un retraso de 3 segundos
*/
setTimeout(() => {
    console.log('Delay');
}, 3000);