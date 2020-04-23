const jsonServer = require("json-server");
const server = jsonServer.create();
const path = require("path");
const router = jsonServer.router(path.join(__dirname, "db.json"));

const middlewares = jsonServer.defaults({
  static: "node_modules/json-server/dist"
});

server.use(middlewares);

server.use(jsonServer.bodyParser);

server.use(function (req, res, next) {
  setTimeout(next, 0);
});

server.use((req, res, next) => {
  if (req.method === "POST") {
    req.body.createdAt = Date.now();
  }
  next();
});

server.post("/courses/", function (req, res, next) {
  const error = validateCourse(req.body);
  if (error) {
    res.status(400).send(error);
  } else {
    next();
  }
});

server.use(router);

const port = 3001;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});

function validateCourse(course) {
    if(!course.name) return "Name is required.";
    if(!course.description) return "Description is required.";
    if(!course.credit) return "Credit is required.";
    if(!course.place) return "Place is required.";
    if(!course.amount) return "Amount is required.";
    return "";
}
