var path = require('path');
//Postgres DATABASE_URL = postgres://user:passwd@host: port/database
//SQLite      DATABASE_URL= sqlite://:@:/
var url = process.env.DATABASE_URL.match(/(.*)\:\/\/(.*?)\:(.*)@(.*)\:(.*)\/(.*)/);
var DB_name = (url[6] || null);
var user             = (url[2] || null);
var pwd             = (url[3] || null);
var protocol   = (url[1] || null);
var dialect       = (url[1] ||  null);
var port            = (url[5] ||  null);
var host            = (url[4] ||  null);
var storage      = process.env.DATABASE_STORAGE;


//Cargar Modelo ORM
var Sequelize = require('sequelize');

//Usar BBDD SQLite o Postgres:
var sequelize = new Sequelize(DB_name, user, pwd, 
                                 {dialect: protocol,
                                   protocol: protocol,
                                   port:          port,
                                   host:          host,
                                   storage:   storage,  // solo SQLite(.env)
                                   omitNull:  true       // solo Postgres
                    }
);

//Importar la definicion de la tabla Alarmas en alarmas.js
var alarmas_path = path.join(__dirname,'alarmas');
var Alarmas =  sequelize.import(alarmas_path);
exports.Alarmas = Alarmas; // exportar definicion de tabla Alarmas



// sequelize.sync() crea e inicializa tabla de preguntas en DB
sequelize.sync().then(function(){
// then(...) ejecuta el manejador una vez creada la tabla
Alarmas.count().then(function(count){
 if(count===0){ // la tabla se inicializa solo si esta vacia
 Alarmas.create({ name: 'Test_equipo ',
                          identificador: '1_test',
                               alarmas:'0'
                             });

  .then(function(){console.log('Base de datos inicializada')});
       };
    });
 });