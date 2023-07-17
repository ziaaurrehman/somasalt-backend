import { connectToDB } from "@/utils/database";
import { Message } from "@/models";

export default async function ChatMessagesHandler(req, res) {
    try {
        await connectToDB();
        if (req.method !== "GET") {
            return res.status(500).json({
                success: false,
                message: "Wrong Request Method",
            });
        }

        const { chatId } = req?.query;
        const page = parseInt(req?.query?.page) || 1;
        const limit = parseInt(req?.query?.limit) || 12;
        const skip = parseInt(Number(page) - 1) * limit;

        if (chatId === undefined) {
            return res.status(400).json({
                success: false,
                message: "chatId is missing",
            });
        }
        const data = await Message.find({ chatId }).skip(skip).limit(limit);

        res.status(200).json({
            success: true,
            data: data, //JSON?.stringify(data)
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong. Please try again",
        });
    }
}
