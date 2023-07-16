import mongoose from "mongoose";

const MessageSchema = mongoose.Schema(
    {
        chatId: {
            type: String,
        },
        senderId: {
            type: String,
        },
        text: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

export const Message =
    mongoose.models.Message || mongoose.model("Message", MessageSchema);
