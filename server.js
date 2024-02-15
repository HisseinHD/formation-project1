const express = require('express');
const bodyparser=require("body-parser");
//import *as ctrjFunction from"./multiplication";
const multiplication = require(`./multiplication`)
 const app = express()
  
var personnes=[ 
    {
      "nom": "aloi",
      "prenom": "hisss"
    }
];
    
 

     // app.method('path', handler)
     // methode: c'est la methode qui nos permet de deffinir la methode Http
     // path: c'est la route qu'on va emprinté pour atteindre notre handler
     // Handler c'est la fonction qui va executé lorsqu'on emprint  la route est path 
     //Handler recoit toujoure deux object en parametre qui sont creer par express
     // Handler (req,res)

app.unsubscribe(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())



app.get('/bonjour',(req,res) => { 
     const personne = {
        nom: 'ali',
        prenom: 'haroun',
        age: 18
     };
     res.send(personne);

})




  app.get('/etudiant',(req,res) => {
     const  etudiant = {
        id: 2,
        nom :'hissein',
        filier :'informatique',
        niveau : 1
     };
     res.status(404).json({
        etudiant: etudiant
     });
     
  })
       //var multi;
      //  multi +=` ${nombre} x ${i}= {nombre*i}`
      //}
     // return multi;
   //}
app.get('/multipli/:nombre/:taille',(req,res) =>{
   const nombre= req.params.nombre;
   const taille= req.params.taille;
   console.log('la taille:',+taille)
   res.send(multiplication(nombre,taille));

})

 app.get('/multiplication',(req,res) =>{
    const  nombre = req.query.nombre;
    const taille = req.query.taille;
    const nom = req.query.nom;

    console.log('la taille:'+taille)
    console.log('le nombre:'+nombre)
    console.log('le nom:'+nom)
    console.log(req)
    res.send(multiplication(nombre,taille));
 })
 
app.get('/',(req,res) => {
   res.json(personnes)
     
 });
   
app.post('/new-person',(req,res) => {
   const data=req.body;
   console.log(data);
   personnes.push(data);
   console.log(personnes);
   res.json(personnes);
   

});
 
 app.listen(3000,() => {
       console.log( 'serveur est demaré sur le PORT:3000');

 });