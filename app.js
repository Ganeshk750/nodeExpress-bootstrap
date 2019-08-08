const express = require('express');
const app = express();
const router = express.Router();

const path = __dirname + '/views/';


router.use('/', (req,res,next) =>{
  console.log("/" + req.method);
  next(); 
});

router.get('/', (req, res) =>{
    res.sendFile(path + 'index.html');
});

router.get('/about', (req,res) =>{
    res.sendFile(path + 'about.html');
});

 
app.use("/",router);
 
app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});


app.listen(3000, () => console.log('Server is rinning at port is 3000'));
