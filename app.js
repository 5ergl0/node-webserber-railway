const express = require('express')
const hbs = require('hbs');
require('dotenv').config()

const app = express()
const port =process.env.PORT




//Handlebars
app.set('view engine','hbs')
hbs.registerPartials( __dirname + '/views/partials');



//Servir contenido estatico 
app.use(express.static('public'))

app.get('/',(req, res)=> {
    res.render('home',{
        nombre:'Fernando',
        titulo: 'Curso de Node'

    })//renderizar
})


app.get('/generic',(req, res)=> {
    res.render('generic',{
        nombre:'Fernando',
        titulo: 'Curso de Node'

    })
})

app.get('/elements',(req, res)=> {
    res.render('elements',{
        nombre:'Fernando',
        titulo: 'Curso de Node'

    })
})

app.get('*',(req, res)=> {
    res.sendFile(__dirname+'/public/404.html')
})

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })


  //C:\Users\Sergio Ruiz\OneDrive\Documentos\Cursos Programación\Nodejs\06-webserver\public\templated-roadtrip