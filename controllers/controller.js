

//Its a GET Method  with anme "getParams", which executes when app is listening at address "/Params"  from routes after app server address http://0.0.0.0:8080/params/paramvalue
exports.getParams = function (req, res) {
  //param1 is the parameter that is sent with this GET Request
  // To access this parameter we use req.params.param1
    res.send("Parameters Received are : "+req.params.param1);

};

exports.getParams2 = function (req, res) {
  //param1 is the parameter that is sent with this GET Request
  // To access this parameter we use req.params.param1
    res.send("Parameters Received are : "+req.params.param1 +"  "+ req.params.param2);

};
