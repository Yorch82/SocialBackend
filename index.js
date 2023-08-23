const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3001;
const{ dbConnection } = require("./config/config");
const { typeError } = require('./middlewares/errors');
const cors = require('cors');
const bodyparser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const swaggerUI = require('swagger-ui-express')
const docs = require('./docs/index')

app.use(express.json());

dbConnection();

app.use(express.static('./public'));
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use('/users', require("./routes/users"));
app.use('/posts', require("./routes/posts"));
app.use('/comments', require("./routes/comments"));
app.use('/api-docs', swaggerUI.serve,swaggerUI.setup(docs))
app.use(typeError);

module.exports = app;

app.listen(PORT, console.log(`Server started on port ${PORT}`));