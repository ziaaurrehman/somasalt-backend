import { connectToDB } from "@/utils/database";
import { Chat, User } from "@/models";

export default async function UserChatHandler(req, res) {
    try {
        await connectToDB();
        if (req.method !== "GET") {
            return res.status(500).json({
                success: false,
                message: "Wrong Request Method",
            });
        }

        const { userId } = req?.query;
        if (userId === undefined) {
            return res.status(400).json({
                success: false,
                message: "userId is missing",
            });
        }
        const data = await Chat.find({
            members: { $in: [userId] },
        });

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
