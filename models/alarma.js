//Definicion del modelo de Alarmas

module.exports=function(sequelize, DataTypes){
 return sequelize.define('Alarmas',
                 { name: {
                    type: DataTypes.STRING,
                    validate:  { notEmpty:  {msg: "-> Falta name"}}
                 },
                    identificador: {
                    type: DataTypes.STRING,
                     validate: { notEmpty:  {msg: "-> Falta identificador"}}
                  },
                    alarma: {
                    type: DataTypes.STRING,
                     validate: { notEmpty:  {msg: "-> Falta Alarma"}}
                  }
                 
            });
 }