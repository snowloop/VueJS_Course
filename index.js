const express = require('express');
const app = express();
const path = require('path');
const port = 3000

app.use(express.static(__dirname));
app.get('/',(req,res,next)=>{
  res.sendFile(path.join(__dirname + '/home.html'))
})
app.listen(port,(err,result)=>{
  if(err){
console.log(err);
console.log("Issue when launching the app")
} else {
  console.log("App running on port " + port)
}
})
