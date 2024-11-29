//simple express server to run frontend production build;
const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 4000;
const host = process.env.HOST || 'localhost';
app.use(express.static(path.join(__dirname, "build")));
app.get("/*", function (req, res) {
	res.sendFile(path.join(__dirname, "build", "index.html"));
});
//app.listen(3000);
app.listen(port, host, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", port);
});
