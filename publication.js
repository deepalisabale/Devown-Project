const mongoose = require ("mongoose");

//create Publication Schema

const PublicationSchema = mongoose.Schema({
  id :Number,
  name:String,
  books:[String],
);

const BookModel = mongoose.model("books",PublicationSchema);
module.exports = PublicationModel;
