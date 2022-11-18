require('dotenv').config();

const Express = require('express');
const App = Express();
const cors = require('cors');
const port = process.env.PORT || 8080;

const BodyParser = require("body-parser");
const cookieSession = require("cookie-session");

App.use(cors());

const apiRoutes = require('./routes/api-routes');
const { application } = require('express');
App.use('/api', apiRoutes);

App.listen(port, () => {
  console.log(`server started on port ${port}...`);
});