const database = require('../services/database.service');


const Source = (news) => {}

this.table = "Source";
this.fillable = ['name'];
this.primaryKey = "id";

// Se utiliza para crear la empresa definitiva en la base de datos
Source.create = async (data, result) => {

    let query = `INSERT INTO ${this.table} (${this.fillable.join(',')}) VALUES (
        ${database.escape(data.name)}
    )`;

    database.execute(query, [], (err, results, fields) => {
        if(err){
            console.log(err);
        }
        result(err, results, fields)
    });
};

module.exports = Source;