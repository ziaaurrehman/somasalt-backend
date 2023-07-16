import mongoose from "mongoose";

const ChatSchema = mongoose.Schema(
    {
        members: {
            type: Array,
        },
    },
    {
        timestamps: true,
    }
);

export const Chat = mongoose.models.Chat || mongoose.model("Chat", ChatSchema);
