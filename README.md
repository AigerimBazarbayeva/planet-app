# planet-app

# Interface documentation for Planet Service

Planet Service uses a number of open source projects to work properly, so called MEVN stack. 

* [Vue.js] - an open-source model–view–viewmodel front end JavaScript framework
* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework 
* [MongoDB] - MongoDB is a cross-platform document-oriented NoSQL database


# Description of endpoints

  - GET planets   
  
  Gets planets and produces an application/json payload.  
  
  HTTP verb used for request: GET
  
  Request URL: 'http://{planet-service-domain}/api/planets'
  
  Response body: response contains array of planets in json format. Each planet is described with following fields. 
  
    _id: type: String, description: ID of a planet
    name: type: String, description: name of the planet
    radius: type: Number, description: radius of the planet
    distance: type: Number, description: distance of the planet to the Sun
    
  Response example: 
  
[{"_id":"5f96c972260be005f7361f5d","name":"Earth","radius":6371,"distance":149,"v":0},
{"_id":"5f96e09c3dddf9210e653c89","name":"Mars","radius":3389,"distance":215,"v":0},
{"_id":"5f96ff1e3dddf9210e653c8c","name":"Venus","radius":6051,"distance":108,"v":0},
{"_id":"5f9757351f296f211d168df3","name":"Mercury","radius":2439,"distance":57,"v":0},
{"_id":"5f9757431f296f211d168df4","name":"Saturn","radius":58232,"distance":1434,"v":0},
{"_id":"5f9757501f296f211d168df5","name":"Uranus","radius":25362,"distance": 2871, "v":0},
{"_id":"5f975ff24486102b4a27cb33","name":"Neptune","radius":24622,"distance": 4495 ,"v":0},
{"_id":"5f975ff24486102b4a27cb33","name":"Pluto","radius":1188,"distance": 6000,"v":0}]

Response code: 200: in case of success, 500: in case of failure
 
      
  - GET distance 
  
  Gets distance fields of two planets based on their ids and calculates distance between them, produces application/json field.
  
  HTTP verb used for request: GET
  
  Request URL: 'http://{planet-service-domain}/api/planets/distance/{id1}/{id2}'
  
  {id1}: id of the first planet, {id2}: id of the second planet
  
  Response body: response contains a single field.
  
  distance: type: Number, description: distance of the planet to the Sun
  
  Response example: {"distance":2909}
  
  Response code: 200: in case of success, 500: in case of failure
  

  - POST planet
  
   Creates a new planet and produces application/json payload.
   
  HTTP verb used for request: POST
  
  Request URL: 'http://{planet-service-domain}/api/planets'
  
  Response body: response contains a planet in json format. 
  
    _id: type: String, description: ID of a planet
    name: type: String, description: name of the planet
    radius: type: Number, description: radius of the planet
    distance: type: Number, description: distance of the planet to the Sun
    
  Response example: {"_id":"5f96c972260be005f7361f5d","name":"Earth","radius":6371,"distance":149,"v":0}
  
  Response code: 200: in case of success, 500: in case of failure

  - PUT planet
  
  Updates a planet specified by id and produces application/json payload.
  
  HTTP verb used for request: PUT
  
  Request URL: 'http://{planet-service-domain}/api/planets/{id}'
  
  {id}: id of the planet which would be updated 
  
  Response body: response contains updated planet in json format
  
    _id: type: String, description: ID of a planet
    name: type: String, description: name of the planet
    radius: type: Number, description: radius of the planet
    distance: type: Number, description: distance of the planet to the Sun
    
  Response example: {"_id":"5f96c972260be005f7361f5d","name":"Earth","radius":6371,"distance":149,"v":0}
  
  Response code: 200: in case of success, 500: in case of failure

  - DELETE planet
  
  Deletes a planet specified by id and produces application/json payload.
  
  HTTP verb used for request: DELETE
  
  Request URL: 'http://{planet-service-domain}/api/planets/{id}'
    {id}:  id of the planet which would be deleted
    
  Response body: response contains deleted planet in json format
  
    _id: type: String, description: ID of a planet
    name: type: String, description: name of the planet
    radius: type: Number, description: radius of the planet
    distance: type: Number, description: distance of the planet to the Sun
    
  Response example: {"_id":"5f96c972260be005f7361f5d","name":"Earth","radius":6371,"distance":149,"v":0}
  
  Response code: 200: in case of success, 500: in case of failure


