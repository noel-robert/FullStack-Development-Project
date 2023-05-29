var client;

function compareDates(date1, date2) {
    // format yyyy-mm-dd
    // params: referenceDate, dbDate
    // check if dbDate is greater than reference date
    referenceDate = date1.split("-");   // from user
    dbDate = date2.split("-");          // from database

    // compare years, then months, then years
    if (parseInt(dbDate[0]) < parseInt(referenceDate[0])) return false;
    else if (parseInt(dbDate[0]) > parseInt(referenceDate[0])) return true;
    else {
        if (parseInt(dbDate[1]) < parseInt(referenceDate[1])) return false;
        else if (parseInt(dbDate[1]) > parseInt(referenceDate[1])) return true;
        else {
            if (parseInt(dbDate[2]) < parseInt(referenceDate[2])) return false;
            else if (parseInt(dbDate[2]) > parseInt(referenceDate[2])) return true;
            else return false;
        }
    }
}

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

async function loginUser(username, password) {
    connectionEstablishment();

    const dbName = 'library';
    const db = client.db(dbName);
    const userDetails = db.collection("UserInfo");

    const result = await userDetails.find({ username: username }).toArray();
    console.log(result)
    closeClient();
    if (result.length==0) {  
        return false;
    } else {
        return comparePassword(password, result[0].password);
    }
}

async function fetchData(article_type, search_field, search_value) {
    connectionEstablishment();

    const dbName = 'library';
    const db = client.db(dbName);
    var collection;
    var query;

    if (article_type == 'article_book') {
        collection = db.collection("books");

        if (search_field == "article_name") {
            query = { book_name: search_value }
            return await collection.find(query).toArray();
        }
        else if (search_field == "article_date") {
            /*TODO */
        }
        else {
            /*TODO */
        }
        
    }
    else if (article_type == 'article_journal') {
        collection = db.collection("journals");
        
        if (search_field == "article_name") {
            query = { journal_name: search_value }
            return await collection.find(query).toArray();
        }
        else if (search_field == "article_date") {
            /*TODO */
        }
        else {
           /*TODO */ 
        }
    }
    else {
        // need to search both
    }
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
    return bcrypt.compareSync(plaintextPassword, hash);
}

module.exports = { fetchData, addUser, compareDates, loginUser, closeClient }