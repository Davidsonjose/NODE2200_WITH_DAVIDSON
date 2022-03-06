const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.writeHead(200, { "Content-Type": "text/html" });
      const homepagePath = path.join(__dirname, "./views/index.html");
      const readHomePage = fs.readFileSync(homepagePath, "utf-8");
      res.write(readHomePage);
      res.end();
      break;
    case "/about":
      const aboutPath = path.join(__dirname, "./views/about.html");
      const readAboutPage = fs.readFileSync(aboutPath, "utf-8");
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(readAboutPage);
      res.end();
      break;
    case "/contact":
      const contactPath = path.join(__dirname, "./views/contact.html");
      const readContactPath = fs.readFileSync(contactPath, "utf-8");
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(readContactPath);
      res.end();
      break;
    default:
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write(
        "<h4>Sorry the route you requested does not exist or has been moved</h4>"
      );
      res.end();
      break;
  }
});

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}/`);
});
