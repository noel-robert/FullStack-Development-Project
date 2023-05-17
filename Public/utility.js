var client;

async function connectionEstablishment() {
    const { MongoClient, Collection } = require('mongodb');

    const url = 'mongodb://127.0.0.1:27017';
    client = new MongoClient(url);
    
    await client.connect();
    console.log("Connected to server");
}

function closeClient() {
    client.close();
}

function fetchData(article_type, article_names, article_date) {
    const dbName = 'library';
    const db = client.db(dbName);

    const article_book = db.collection("books");
    const article_journal = db.collection("journals");

    

}

module.exports = { connectionEstablishment, closeClient, fetchData }