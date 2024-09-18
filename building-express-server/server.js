//step 1: npm init -y
//step 2: npm i express
//setp 3: .gitignore for node_modules
//step 4: create a server.js to add the server set-yp
//set5: type: "module in the package.json"

//import express from express
import express from "express";

//initialise my express server and storing it in the aoo variable (convention name)

const app = express();

//i am going to tell my server to use JSON data

app.use(express.json());

//we need to set up a PORT to host our server
//i need two arguments: first one is the PORT number, second argument is  function to check the port is working
app.listen(8080, function () {
  console.log("server is running on PORT 8080");
});

//we are going to write an endpoint four root route
//we will have different endpoints to perform different tasks
//the GET method allows us to read data, so in this endpoint the tast is to read data
//the endpoint methods need two arguments: first os the endpoint, second is a function to perform the task
//our anonymous callback function needs two parameters: request and response
//your root route should alwyas be for testing services

app.get("/", function (a, b) {
  //at the moment, we are not expecting a request, so the parameter request has no use at the moment
  b.json({ message: "you are looking at my root route. how rude!" });
});

//GET endpoint to read data
app.get("/personalinfo", function (request, response) {
  //we will use the request parameter to request data to the database and use response to send data to client
  response.json({ message: "database data recieved" });
});

//we can write a POST endpoint to add new data to the database
app.post("/addnewdata", function (request, response) {
  //reviece the data from client
  //we are to add the data to the database
  response.json({ message: "form data received and sent to the database" });

  const bodyData = request.body;

  console.log(bodyData);

  response.json({
    message: "body data received",
  });
});
