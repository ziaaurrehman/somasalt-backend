import mongoose from "mongoose";

let isConnected = false; // track the connection

export const connectToDB = async () => {
    mongoose.set("strictQuery", true);
    console.log("here");
    // if (isConnected) {
    //     console.log("MongoDB is already connected");
    //     return;
    // }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "somasaltdb",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        isConnected = true;

        console.log("MongoDB connected");
    } catch (error) {
        console.log(error);
    }
};
