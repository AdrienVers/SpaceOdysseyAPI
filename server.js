const http = require("http");
const app = require("./app");
const port = normalizePort("8000");

app.set("port", port);
const server = http.createServer(app);

app.listen(port, () => {
	console.log("Server stated on port 8000");
});

function normalizePort(val) {
	var port = parseInt(val, 10);

	if (isNaN(port)) {
		return val;
	}
	if (port >= 0) {
		return port;
	}
	return false;
}
