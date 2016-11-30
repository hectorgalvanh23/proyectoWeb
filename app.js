var express= require("express");

var app= express();
var log4js = require('log4js');
var logger = log4js.getLogger();
logger.debug("Some debug messages");
var Articulos = require("./models/articulos").Articulos;



app.set("view engine","pug");
app.use(express.static("public"));
var server = require("http").Server(app);








app.get('/api/todos', function(req, res) {  
    Articulos.find(function(err, todos) {
        if(err) {
            console.log(err);
        }
        
        res.json(todos);
        
    });
});






app.get("/",function(req,res){
    res.render('shop');
    
});

app.get("/cart",function(req,res){
    res.render('cart');
    
});


app.get("/:id",function(req,res){
    
    
    Articulos.findOne({_id:req.params.id},function(err, doc){
        if(err){
            
        console.log("Error 1",err);
        }   
        console.log("Si",doc)
        
          
              
        res.format({
          html: function(){
              res.render('single-product',{"doc":doc});
          },
          json: function(){
              res.json(doc);
          }
        });    

    })
});


/*
app.get("/:id",function(req,res){
    res.render('single-product');
    
});
*/




server.listen(process.env.PORT || 8080);