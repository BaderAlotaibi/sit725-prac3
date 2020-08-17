let Express = require('express');
let app=new Express();
const port = 3000;


//server static content
app.use(Express.static('public'));


app.get('/adder',(req,res)=>{
    let num1=parseInt(req.query.num1);
    let num2=parseInt(req.query.num2);
    let result = num1+num2;
    let data = {
        result
    }
    res.json(data);

})

function getRandomInt(max){
    return Math.floor(Math.random() * Math.floor(max));
}
app.get('/random',(req,res)=>{
 let random=getRandomInt(100);
 let data = {
     random
 }
 res.json(data)
})



app.get('/test',(req,res)=>{
    console.log('Server test');
    res.send('Test Hit , Thanks ')
})

app.listen(port,()=>{
    console.log('Server running on', port);
});
