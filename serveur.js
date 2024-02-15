 const express = require('express');
const  bodyParser= require('body-parser')
const app= express();
const PORT =4000;

  app.use(bodyParser.urlencoded({ extended: false}))
  app.use(bodyParser.json())

   const personnes=[];

       app.post(`/personne/new-personne`,(req,res)=>{
        const data =req.body;
        personnes.push(data);
        res.status(200).json({
            message: "la personne a ete bien ajoute",
            listPersonne: personnes 
        })
       })
app.get('/personne/get-personne/:id',(req,res)=>{
    const id = req.params.id ;
   
    const personne = personnes.find(el => el.id == id);
    if (personne){
        res.status(201).json({
            message :'la personne recherche est:',
            personne
        })
    }else (
        res.status(404).json('not found')
    )

});
 app.delete('/personne/delete-personne/:id',(req,res) =>{
    const id= req.params.id;
    const index= personnes.findIndex(el => el.id==id);
    if (index < 0 ){
        res.status(404).json({
            message: 'la personne id'+id+'a ete suprimé',
            listPersonne: personnes 
           
        })
    }else{
  personne.splice(index,1);
  res.status(201).json({
  

  })


        }
          
        })
    
     
app.put(`/personne/update-personne/:id`,(req,res) => {
    const id = req.params.id;
    const data = req.body;
    const index = personnes.findIndex(el => el.id == id);
    personnes [ndex] = {...data};
    res.json(personnes[index]);
})
app.listen(PORT,()=> {
    console.log('le serveur est demarré sur le port '+ PORT)
}) 