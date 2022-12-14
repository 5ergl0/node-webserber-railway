
/*
const http=require('http')


http.createServer((req,res)=>{

    console.log(req)

    //res.writeHead(200,{'Content-Type':'application/json'})//cambiar status

    
    res.write('Hola Mundo')//respuesta
    res.end()//Indicar a node que ya termino mi respuesta 

})

.listen(8080);

console.log('Escuchando el puerto',8080)


/*
req:toda la info que estan solicitando
res:Es lo que mi servidor le va a responder al cliente 
*/
