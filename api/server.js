require('dotenv').config();

const Express = require('express');
const App = Express();
const port = process.env.PORT || 8080;

const BodyParser = require("body-parser");
const cookieSession = require("cookie-session");

App.listen(port, () => {
  console.log(`server started on port ${port}...`);
});