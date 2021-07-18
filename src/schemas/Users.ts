import { Schema, model, Document } from "mongoose";

interface IUser extends Document {
    username: String;
    email: String;
    password: String;
}

const User = new Schema({
    username: String,
    email: String,
    password: String
}, {
    timestamps: true
});

const userModel = model<IUser>("users", User);

export { userModel };