import mongoose from "mongoose";

mongoose.set("strictQuery", true)
//usar ?authSource=admin em conexões com a autênticação habilitada no mongo
mongoose.connect("mongodb://mongo:secretmongosecret@0.0.0.0:27017/livraria?authSource=admin");

let db = mongoose.connection;

export default db;
