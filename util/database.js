const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const mongoPassword = process.env.MONGO_PASSWORD;
console.log(`mongoPassword`, mongoPassword);

const uri = `mongodb+srv://nitinraw_db_user:${mongoPassword}@cluster0.dphbp9y.mongodb.net/?appName=Cluster0`;

const mongoConnect = (callback) => {
  MongoClient.connect(uri)
    .then((res) => {
      console.log(`connected to MongoDb`);
      callback(res);
    })
    .catch((err) => console.log(`Error in connecting to mongoDb ${err}`));
};

module.exports = mongoConnect;
