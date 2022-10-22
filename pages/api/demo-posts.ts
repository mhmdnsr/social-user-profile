// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import {IPost} from "@interfaces/post.interface";

const posts: IPost[] = [
    {
        id: 1,
        createdAt: '2022-10-19T09:00:00',
        image: 'https://picsum.photos/id/1/900/600',
        user: {
            id: 3,
            name: 'Khaled Mohamed',
            image: 'https://picsum.photos/id/1025/300/300',
            isFollowing: true
        },
        commentsCount: 300,
        likesCount: 630
    },
    {
        id: 2,
        createdAt: '2022-10-19T11:00:00',
        image: 'https://picsum.photos/id/2/900/600',
        user: {
            id: 2,
            name: 'Mohamed Ahmed',
            image: 'https://picsum.photos/id/1011/300/300',
            isFollowing: true
        },
        commentsCount: 24,
        likesCount: 103
    },
    {
        id: 3,
        createdAt: '2022-10-20T14:00:00',
        image: 'https://picsum.photos/id/1013/900/600',
        user: {
            id: 4,
            name: 'Ayman Saad',
            image: 'https://picsum.photos/id/1024/300/300',
            isFollowing: true
        },
        commentsCount: 90,
        likesCount: 50
    },
    {
        id: 4,
        createdAt: '2022-10-20T19:00:00',
        image: 'https://picsum.photos/id/1016/900/600',
        user: {
            id: 6,
            name: 'Nahed Mohamed',
            image: 'https://picsum.photos/id/1022/300/300',
            isFollowing: false
        },
        commentsCount: 200,
        likesCount: 424
    },
    {
        id: 5,
        createdAt: '2022-10-21T16:30:00',
        image: 'https://picsum.photos/id/1005/900/600',
        user: {
            id: 2,
            name: 'Kareem Wael',
            image: 'https://picsum.photos/id/1020/300/300',
            isFollowing: false
        },
        commentsCount: 4,
        likesCount: 20
    },
    {
        id: 6,
        createdAt: '2022-10-18T20:00:00',
        image: 'https://picsum.photos/id/1001/900/600',
        user: {
            id: 1,
            name: 'Ahmed Mohamed',
            image: 'https://picsum.photos/id/103/300/300',
            isFollowing: true
        },
        commentsCount: 20,
        likesCount: 36
    }
];


export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<{ posts: IPost[] }>
) {
    res.status(200).json({posts})
}
