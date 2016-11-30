

var vistas = angular.module("vistas",[])











.factory("Carrito",function($http){
    var fab={};


    fab.car=[];
    
    


    

    fab.total = 0;
    fab.subTotal = 0;
    fab.iva = 0;
    
    fab.importe=0;

    
    fab.articulos=[];
    fab.artiSele={};
    
    
    
        
          fab.load=function(){
             $http.get('/api/todos')
        .success(function(data) {
            angular.copy(data,fab.articulos);
            //angular.copy(fab.articulos._id,fab.id);
            //console.log(fab.articulos[1]._id)
            //console.log(fab.articulos)
            //console.log(fab.id);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });   
              
              //fab.mostrar();
          }
          


      fab.totalizar = function () {
            fab.subTotal = 0;
            for (var i = 0; i < fab.car.length; i++) {
                fab.subTotal+= fab.car[i].importe;
            }

            fab.iva = fab.subTotal * 0.16;
            fab.total = fab.iva + fab.subTotal;
            fab.noArticulos=fab.car.length;
            console.log(fab.subTotal);
            
        }

   
     fab.addCar =  function (arti){
            
            arti.importe = arti.precio * arti.canti;    
            fab.car.push(arti);
            //fab.noArticulos=arti.canti;


            fab.totalizar();
            console.log(fab.car)
            //console.log(total);
        }


       fab.delete = function (arti, posi) {
            for (var i = 0; i < fab.car.length; i++) {
                if(fab.car[i].nombre == arti.nombre)
                {
                    fab.car.splice(posi, 1);
                    fab.totalizar();
                }   
            }
        }
        
        
    

    return fab;

})


.controller("shop",function($scope,$http,Carrito){
    
    
     
    $scope.carrito=Carrito;
    //angular.copy(Carrito.car,$scope.car);
    $scope.car=Carrito.car;
    $scope.total=Carrito.total;
    $scope.subtotal=Carrito.subTotal;
    $scope.noArticulos=0;
    Carrito.load();
    $scope.articulos=Carrito.articulos;
    
    
    //console.log()
    console.log("Carrito",$scope.car);
         
   
            
    
    
    

    

        
        

    
       


    $scope.get_total=function(){
        $scope.total=Carrito.total;
        console.log($scope.total);

    }


$scope.get_subTotal=function(){
        $scope.subtotal=Carrito.subTotal;
        

    }

    






              



})

.controller("desc",function($scope,$http,Carrito){
    
    //$scope.articulos.id=$routeParams.id;
    
    //$scope.artiSele=$scope.articulos[$routeParams.id-1];
    /*    
$scope.artiSele=function(){
        $http.get(/todos/,+'')
        .success(function(data){
            
            
            
            
        })
        
    }

           
  */    
  
  
    
    });







