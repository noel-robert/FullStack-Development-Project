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

async function addUser (username, email, password) {
    connectionEstablishment();

    const dbName = 'library';
    const db = client.db(dbName);
    const userDetails = db.collection("UserInfo");  // collection
    
    var user = { username: username, email: email, password: hashPassword(password) };
    await userDetails.insertOne(user);

    closeClient();
}

async function fetchData(article_type, article_names, article_date) {
    const dbName = 'library';
    const db = client.db(dbName);

    const article_book = db.collection("books");
    const article_journal = db.collection("journals");

    var query = {}; /*TODO*/

    const result = await collection.find(query).toArray();
    return result;
}

function hashPassword(plaintextPassword) {
    const bcrypt = require("bcrypt")
    var saltRounds = 10;
    const hash = bcrypt.hashSync(plaintextPassword, saltRounds);
    return hash;
}
    
// compare password
function comparePassword(plaintextPassword, hash) {
    const bcrypt = require("bcrypt")
    bcrypt.compareSync(plaintextPassword, hash);
}

module.exports = { connectionEstablishment, closeClient, fetchData, addUser }