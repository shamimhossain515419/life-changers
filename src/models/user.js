import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({

     name: String,
     email: String,
     password: String,
     image: String,
     phone: Number,
     address: String,
     loan: Number,
     deposit: Number,
     instalment: Number,
     profit: Number,





});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
