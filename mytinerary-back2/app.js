//IMPORTS
import 'dotenv/config.js'                           //importo unicamente la configuracion de la variable de entorno
import __dirname from './utils.js';                 //importo la configuracion de la ubicacion del servidor (antes venia por defecto)
//var createError = require('http-errors');
import createError from 'http-errors';
//var express = require('express');
import express from 'express'                      //provee metodos y propiedades para levantar servidores
//var path = require('path');
import path from 'path';                           //sirve para conocer la ubicacion de nuestro servidor
//var cookieParser = require('cookie-parser');
//var logger = require('morgan');
import logger from 'morgan'                        //registra cada una de las peticiones

//var indexRouter = require('./routes/index');       //solo vamos a configurar las rutas del enrutador principal
                                                   // este enrutador va a allamar a todos los otros recursos(cities, itineraries, users)
import indexRouter from './routes/index.js'

let app = express();                               //ejecutando el modulo de express : creo una app  de back (servidor)

// vIEW ENGINE SETUP
//SET es el metodo para setear (configurar) algo (motor de plantillas de vistas de EJS)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//MIDDLEWARES
//USE es el metodo necesario para obligar a mi aplicacion a que use la funcion cada vez que se realiza una solicitud
app.use(logger('dev'));                                         //obligo al servidor a registrar una peticion con el modulo de logger/morgan
app.use(express.json());                                        //obligo al servidor a manipular/leer json
app.use(express.urlencoded({ extended: false }));               //obligo al servidor a leer params/queries
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));        //obligo al servidor a accerder a los archivos estaticos de la carpeta public

//ROUTER
app.use('/api', indexRouter);                                      //obligo al servidor a que use las rutas del enrutador principal con "/api"


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app
