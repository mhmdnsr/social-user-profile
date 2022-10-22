import {NextApiRequest, NextApiResponse} from "next";
import {IUserStory} from "@interfaces/user-story.interface";

const userStories: IUserStory[] = [
    {id: 1, name: 'Ahmed Mohamed', isSeen: true},
    {id: 2, name: 'Mohamed Ahmed', isSeen: true, image: 'https://picsum.photos/id/1011/300/300'},
    {id: 3, name: 'Khaled Mohamed', isSeen: false},
    {id: 4, name: 'Ayman Saad', isSeen: false, image: 'https://picsum.photos/id/1025/300/300'},
    {id: 5, name: 'Saeed Mostafa', isSeen: false, image: 'https://picsum.photos/id/103/300/300'},
    {id: 6, name: 'Gehad Sayed', isSeen: false, image: 'https://picsum.photos/id/1022/300/300'},
    {id: 7, name: 'Ahmed Gamal', isSeen: false, image: 'https://picsum.photos/id/1014/300/300'},
    {id: 8, name: 'Galal Ahmed', isSeen: false},
    {id: 9, name: 'Fatma Fady', isSeen: false, image: 'https://picsum.photos/id/1020/300/300'},
    {id: 10, name: 'Fathy Gamil', isSeen: false, image: 'https://picsum.photos/id/10/300/300'},
];

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<{ stories: IUserStory[] }>
) {
    res.status(200).json({stories: userStories})
}
