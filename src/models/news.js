import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({

     title: String,
     description: String,
     title: String,
     date: String,
     name: String,
     comment: Array,
     image: Array,


});

const News = mongoose.models.News || mongoose.model("News", UserSchema);

export default News;
