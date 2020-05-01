const database = require('../services/database.service');


const News = (news) => {}

this.table = "RecordNews";
this.fillable = ['id_source','author', 'title', 'description', 'url', 'urlToImage', 'publishedAt', 'content'];
this.primaryKey = "id";

// Se utiliza para crear la empresa definitiva en la base de datos
News.create = async (id_source, data, result) => {

    let query = `INSERT INTO ${this.table} (${this.fillable.join(',')}) VALUES (
        ${database.escape(id_source)}, ${database.escape(data.author)}, 
        ${database.escape(data.title)}, ${database.escape(data.description)}, 
        ${database.escape(data.url)}, ${database.escape(data.urlToImage)},
        ${database.escape(data.publishedAt)}, ${database.escape(data.content)}
    )`;

    database.execute(query, [], (err, results, fields) => {
        if(err){
            console.log(err);
        }
        result(err, results, fields)
    });
};

module.exports = News;