var http = require("http");
url = "http://maps.googleapis.com/maps/api/directions/json?origin=Central Park&destination=Empire State Building&sensor=false&mode=walking";

// get is a simple wrapper for request()
// which sets the http method to GET
exports.request = function (req, resp) {
    http.get(url, function (response) {
        // data is streamed in chunks from the server
        // so we have to handle the "data" event    
        var buffer = "",
            data,
            route;

        response.on("data", function (chunk) {
            buffer += chunk;
        });

        response.on("end", function (err) {
            // finished transferring data
            // dump the raw data
            data = JSON.parse(buffer);
            route = data.routes[0];
            resp.send(data);
           // extract the distance and time
        //    console.log("Walking Distance: " + route.legs[0].distance.text);
        //    console.log("Time: " + route.legs[0].duration.text);
        });
    });
    
}