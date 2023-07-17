import { connectToDB } from "@/utils/database";
import { Chat, User } from "@/models";

export default async function ConnectChatHandler(req, res) {
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

        let users = await Chat.aggregate([
            {
                $match: {
                    members: { $in: [userId] },
                },
            },
            {
                $unwind: "$members",
            },
            {
                $group: {
                    _id: "$members",
                },
            },
        ]);

        users = users.map((user) => user._id);
        console.log("users123 ", users);

        users = await User.find({
            _id: { $nin: [...users, userId] },
        });

        console.log("users12 ", users);

        if (!users.length) {
            return res.status(200).json({
                success: true,
                data: users,
                message: "No user to connect",
            });
        }

        return res.status(200).json({
            success: true,
            data: users, //JSON?.stringify(data)
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong. Please try again",
        });
    }
}
