export interface IPost {
    id: number,
    createdAt: string,
    image: string,
    user: IPostUser,
    likesCount: number,
    commentsCount: number
}

export interface IPostUser {
    id: number,
    name: string,
    image: string,
    isFollowing: boolean
}
