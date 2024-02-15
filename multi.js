const express = require('express');
const app = express();
app.get('/multi',(req, res) => {
     const number = parseInt(req.query.number);
 if (!isNaN(number)) {
     let result = ''; 
     for (let i = 1; i <= 10; i++){
         result += `$ { number}*${i} = ${number *i}\n`;
     } 
     res.send(result);
    }  else { 
        res.status(400).send('Invalid input');
   }
});
   // app.use((req, res) => { res.status(404).send('Not found');
//});
const PORT = 3008;
   app.listen(PORT, () => { 
    console.log('serveur est demaré sur le PORT:3008');
})