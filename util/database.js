require("dotenv").config({ path: ".local.env" });

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const mongoUser = process.env.MONGO_USER;
const mongoPassword = process.env.MONGO_PASSWORD;

const uri = `mongodb+srv://${mongoUser}:${mongoPassword}@cluster0.dphbp9y.mongodb.net/?appName=Cluster0`;

let _db;
const mongoConnect = (callback) => {
  MongoClient.connect(uri)
    .then((client) => {
      console.log(`connected to MongoDb`);

      _db = client.db();
      callback();
    })
    .catch((err) => console.log(`Error in connecting to mongoDb ${err}`));
};

const getDb = () => {
  if (_db) return _db;
  throw "No Db found;";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
