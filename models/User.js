import mongoose from "mongoose";

/**
 * User Schema
 */
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        // unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    age: {
        type: Number,
        default: null,
    },
    profileImage: {
        type: String,
        default: "",
    },
    backgroundImage: {
        type: String,
        default: "",
    },
    password: {
        type: String,
        required: true,
        // select: false,
    },
});

export const User = mongoose.models.User || mongoose.model("User", userSchema);
