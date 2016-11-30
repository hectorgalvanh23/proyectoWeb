var mongoose = require("mongoose");
mongoose.connect("mongodb://hector:123456@ds050559.mlab.com:50559/articulos");

var Schema = mongoose.Schema,
ObjectId = Schema.ObjectId;


var articulosSchema ={
    _id:ObjectId,
    nombre:String,
    precio:Number,
    imagenUrl:String,
    desc:String
    
    
};



module.exports ={
    Articulos: mongoose.model('Articulos',articulosSchema),
   
};

