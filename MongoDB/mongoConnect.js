const { MongoClient } = require('mongodb');

// connection urls
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

// const userDB = '';
// const authorDB = '';
// const articleDB = '';

async function main() {}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close())