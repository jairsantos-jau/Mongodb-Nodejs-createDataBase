            // CRIANDO O BANCO DE DADO
            var MongoClient = require('mongodb').MongoClient;
            var url = "mongodb://localhost:27017/meuBanco";
            
            MongoClient.connect(url, function(err, db) {
              if (err) throw err;
              console.log("Database created!");
              db.close();
            });