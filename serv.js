const express = require('express');
const app = express();
 // Notre table des données
 const elements = [  
    { id: 1 , nom: 'hissein'},
    { id: 2 , nom: 'brahim 2'},
    { id: 3 , nom: 'maryam'},
    { id: 4 , nom: 'daoud'},
    { id: 5 , nom: ' hafiz'},
 ];
 console.log('les elements du tableau sont:')
 console.log(elements);

 console.log("le tableau aprés ajout d'un element a la fin")
 elements.push({ id: 10, nom:'hagar'});
 console.log(elements);
 console.log("le tableau aprés supression  d'un element a la fin")
 let dernierElements = elements.pop();
 console.log(elements);
  
  
 

 // Endpoint pour chercher des element en fonction d'un paramétr 'nom'
 app.get('/elements',(req,res) => {
     const searchTerm = req.query.nom; //parametr de requet nom
     const results = elements.filter(element =>
      element.nom.includes(searchTerm));
      res.json(results);
 });
 app.listen(3000,() => {
    console.log('le serveur est en marche sur le port 3000!');
 });