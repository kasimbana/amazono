const express = require("express"); //http request, URLS, http routes(API)
const morgan = require("morgan"); //http requests loger, middleware, simplifica el proceso de loginrequest a la aplicacion
const bodyParser = require("body-parser"); //data reader, para comunicar node con los datos del frontend, pej. pasar el login y la password node tiene que entender los datos para poder hacer algo
const mongoose = require("mongoose"); //mongo db agent, comunicar directamente node con la base de datos de mongo, con una easy to use interfaz de usuario
const cors = require("cors");

const config = require("./config");

const app = express(); //instancia de express

mongoose.connect(config.database, (err) => {
    if(err){
        console.log(err);
    }else{
        console.log("Connected to the database");
    }
});

app.use(bodyParser.json()); //leer datos in json
app.use(bodyParser.urlencoded({extended: false})); //urlencoded, ponemos extended a false porque en el futuro querremos leer tambien imagenes
app.use(morgan('dev')); //log de todas las request en la terminal
app.use(cors());

const userRoutes = require("./routes/account");
app.use("/api/accounts", userRoutes);

app.listen(config.port, err => {
    console.log("Magic happens on port "+config.port);
});