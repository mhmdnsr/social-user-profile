import {IPost} from "@interfaces/post.interface";

export default class PostsFilterService {
    public static getFollowingPosts(posts: IPost[]): IPost[] {
        return posts.filter((post) => {
            return post.user.isFollowing;
        })
    }

    public static getNewestPosts(posts: IPost[]): IPost[] {
        return posts.sort((p1, p2) => {
            let p1_date = new Date(p1.createdAt);
            let p2_date = new Date(p2.createdAt);
            return p2_date.getTime() - p1_date.getTime();
        })
    }

    public static getPopularPosts(posts: IPost[]): IPost[] {
        return posts.sort((p1, p2) => {
            return p2.likesCount - p1.likesCount;
        })
    }
}
