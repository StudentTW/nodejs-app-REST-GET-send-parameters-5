module.exports = function(app){
    var appMethods = require('./controllers/controller');

//Here we setup REST GET routes to allow the methods to execute on specific route.


    //This will call getParams method function with parameter the we send after "params/"  in link in controller.js when address is http://0.0.0.0:8080/params/paramvalue
    app.get('/params/:param1', appMethods.getParams);

    app.get('/params/:param1/:param2', appMethods.getParams2);


  };
