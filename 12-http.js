const http = require("http");

const server = http.createServer((req, res) => {
	if (req.url === "/") {
		res.end("Welcome to our home page");
		return; // Exit the function after responding
	} else if (req.url === "/about") {
		res.end("Here is our short history");
		return; // Exit the function after responding
	}

	// For all other routes
	res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for</p>   
        <a href='/'>Back Home</a>
    `);
});

server.listen(5000, () => {
	console.log("Server is running on port 5000...");
});
