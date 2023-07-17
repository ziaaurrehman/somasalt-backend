import { connectToDB } from "@/utils/database";
import { Message } from "@/models";

export default async function SaveMessageHandler(req, res) {
    try {
        await connectToDB();
        if (req.method !== "POST") {
            return res.status(500).json({
                success: false,
                message: "Wrong Request Method",
            });
        }

        const { senderId, chatId, text } = req?.body;
        const message = new Message({
            senderId,
            chatId,
            text,
        });
        const data = await message.save();

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
