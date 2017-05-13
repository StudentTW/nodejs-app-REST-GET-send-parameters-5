# nodejs-app-REST-GET-send-parameters-5
Nodejs App with REST GET Methods Sending Parameters 

Nodejs App Send Parameters using REST GET Method

1	Add new method function in controller.js
    
      //Its a GET Method  with anme "getParams", which executes when app is listening at address "/Params"  from routes after       //app server address http://0.0.0.0:8080/params/paramvalue
      
        exports.getParams = function (req, res) {
          //param1 is the parameter that is sent with this GET Request
          // To access this parameter we use req.params.param1
            res.send("Parameters Received are : "+req.params.param1);

        };

2	Now add new route in routes.js

      app.get('/params/:param1', appMethods.getParams);

3	Now save the files and execute the app using “npm start”

4	Note: use “npm install” if you cloned this project from github to install node modules/ dependencies

5	Now open browser and type http://0.0.0.0:8080/params/Apple

6	You will see the value apple as parameter 

7	Try creating  more GET methods with more the one parameters
  
      
        exports.getParams2 = function (req, res) {
          //param1 is the parameter that is sent with this GET Request
          // To access this parameter we use req.params.param1
            res.send("Parameters Received are : "+req.params.param1 +"  "+ req.params.param2);

        };
8	Add route for above method
      
          app.get('/params/:param1/:param2', appMethods.getParams2);

9	Restart server to check the changes in browser

10	
