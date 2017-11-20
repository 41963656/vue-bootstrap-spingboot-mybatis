/**
 * Created by wangwj on 2016/6/4.
 *
 */
var PORT = 81;
var http = require('http');
var url = require('url');
var fs = require('fs');
var mine = require('./mine').types;
var path = require('path');
var mock = require('./mock');
var server = http.createServer(function (request, response) {
    var pathname = decodeURI(url.parse(request.url).pathname);
    var realPath = path.join(".", pathname);
    fs.exists(realPath, function (exists) {
        var readFile = function (filename) {
            console.log("response for url " + pathname + " to [" + filename + "]");
            var ext = path.extname(filename);
            ext = ext ? ext.slice(1) : 'unknown';
            if (ext == "json") {
                fs.readFile(path.join(__dirname, filename), {encoding: 'utf-8'}, function (err, bytesRead) {
                    if (!err) {
                        var data = JSON.parse(bytesRead);
                        response.writeHead(200, {
                            'Content-Type': 'application/json'
                        });
                        response.write(JSON.stringify(data));
                        response.end();
                    } else {
                        response.writeHead(404, {
                            'Content-Type': 'text/plain'
                        });
                        response.write(err.toString());
                        response.end();
                    }
                });
            } else {
                fs.readFile(filename, "binary", function (err, file) {
                    if (err) {
                        response.writeHead(500, {
                            'Content-Type': 'text/plain'
                        });
                        response.end(err);
                    } else {
                        var contentType = mine[ext] || "text/plain";
                        response.writeHead(200, {
                            'Content-Type': contentType
                        });
                        response.write(file, "binary");
                        response.end();
                    }
                });
            }
        }


        if (!exists) {
            readFile(realPath + ".json");
        } else {
            var stat = fs.lstatSync(realPath);
            if (stat.isDirectory()) {
                fs.exists(realPath + "index.html", function (idxExists) {
                    if (idxExists) {
                        readFile(realPath + "index.html");
                    } else {
                        readFile(realPath + ".json");
                    }
                });
            } else {
                readFile(realPath);
            }
        }
    });
});
server.listen(PORT);
console.log("Server runing at port: " + PORT + ".");
