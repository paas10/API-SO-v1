const express = require('express');
const emailService = require('../../services/email.service');
const https = require('https');
const NewsApi = require('newsapi');
const newsapi = new NewsApi('55141f0a605f4e9793c5047ea1ab9795')
var cron = require('node-cron');


// const RecordNews = require('../../models/recordNews.model');
// const Sources = require('../../models/source.model');

cron.schedule('* * * * *', () => {

    console.log('- API del sitio newsapi.org utilizada durante el desarrollo -')

        let noticias;

        newsapi.v2.everything({
            sources: 'bbc-news,the-verge,cnn',
            q: 'petroleum',
            language: 'en',
        }).then(response => {
            noticias = response
            //console.log(noticias.articles);

            // Se verifica cuántas noticias se recuperaron y se escoge un numero aleatorio para enviar la noticia.
            cantNoticias = Object.keys(noticias).length;
            randomNum = Math.floor((Math.random() * cantNoticias) + 1);

            //console.log(noticias.articles[randomNum]);
            emailService.sendMail(noticias.articles[randomNum], function () {
                res.status(200).json({
                    "mensaje": 'Todo correcto, todo en orden'
                });
                next();
                return;
            });

            // Sources.create(noticias.articles[randomNum], function (err, data) {
            //     if (err) {
            //         res.status(500).json({
            //             status: err
            //         });
            //         next();
            //         return;
            //     }

            //     RecordNews.create(data.insertId, noticias.articles[randomNum], function (err, data) {
            //         if (err) {
            //             res.status(500).json({
            //                 status: err
            //             });
            //             next();
            //             return;
            //         }

            //     });
            // });
        });
});


jobs = {

    submitRequest: (res, next) => {

        
    }
};

module.exports = jobs;