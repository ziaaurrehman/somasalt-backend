import { connectToDB } from "@/utils/database";
import { Chat, User } from "@/models";

export default async function StartHandler(req, res) {
    try {
        await connectToDB();
        if (req.method !== "POST") {
            return res.status(500).json({
                success: false,
                message: "Wrong Request Method",
            });
        }

        const { senderId, receiverId } = req?.body;
        if (
            senderId === undefined ||
            senderId === "" ||
            receiverId === undefined ||
            receiverId === ""
        ) {
            return res.status(400).json({
                success: false,
                message: "senderId, receiverId is empty",
            });
        }
        const startChat = new Chat({
            members: [senderId, receiverId],
        });

        const data = await startChat.save();
        res.status(200).json({
            success: true,
            data: data, //JSON.stringify(data),
        });
    } catch (error) {
        return res
            .status(500)
            .json({ success: false, message: "Failed to start chat" });
    }
}
