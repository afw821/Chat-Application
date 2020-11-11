const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
let randomColor = require("randomcolor");
const uuid = require("uuid");

//middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
//startup
require("./startup/routes")(app);
require("./routes/html")(app);

//server
const PORT = process.env.PORT || 3900;
const server = app.listen(PORT, () =>
  console.log(`App listening on PORT: ${PORT}`)
);

const io = require("socket.io")(server);
