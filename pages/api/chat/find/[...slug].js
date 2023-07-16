import { connectToDB } from "@/utils/database";
import { Chat, User } from "@/models";

export default async function FindChatHandler(req, res) {
    try {
        await connectToDB();
        if (req.method !== "GET") {
            return res.status(500).json({
                success: false,
                message: "Wrong Request Method",
            });
        }

        const { slug } = req?.query;
        console.log("slug", slug);

        if (!(slug?.length === 2)) {
            return res.status(400).json({
                success: false,
                message: "user ids are missing",
            });
        }

        const data = await Chat.findOne({
            members: { $all: [slug?.[0], slug?.[1]] },
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
