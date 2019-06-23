const express = require ('express')
const app = express() 
app.use(date=(req, res, next)=>{
    let requestAt = new Date()
    console.log(requestAt)
    next()
})


let opening = new Date().getHours();

app.get('/', function(req, res) {
    if ( (opening>8)&&(opening<17) ) (res.sendFile(__dirname + '/public/home.html'));
    else res.sendFile(__dirname + '/public/out-of-service.html');
  })


app.use(express.static(__dirname+'/public/'))


app.listen(3000, (err)=>{
    if (err) console.log('server is not running');
    else console.log('server is running on port 3000');
})