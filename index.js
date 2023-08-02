// socket will close and destroy automatically after the device close the connection
const net  = require("net")
let port = 3000
let host = "0.0.0.0"
var s = net.createServer(function (sock) {
    sock.setEncoding('utf8');
    console.log("new connection", process.uptime())

    var body = "";
    sock.on('data', function (data) {
        body = body + data;
    });
    

    sock.on('end', function() {
        console.log(data);
        postData(data);
    });

    // TODO error handling here
});

s.listen(port, host, function () {
    console.log('Server listening on ' + host + ':' + s.address().port);
});
