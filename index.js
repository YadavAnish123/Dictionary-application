const express=require('express')
var axios = require("axios");
const app=express();
const port=3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/base.html');
  });
  
app.get('/search',(req,res)=>{
     
    var options = {
        method: 'GET',
        url: 'https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary',
        params: {word: req.query.word},
        headers: {
          'X-RapidAPI-Key': '15cafa62femsh40063507fdfe5bap19b3f0jsn973d470dbfa5',
          'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
        res.json(response.data);
      }).catch(function (error) {
        console.error(error);
      });

})

app.listen(port,()=>{
    console.log(`runing on port ${port}`)
})
