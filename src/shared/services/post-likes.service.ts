class PostLikesService {
    private static instance?: PostLikesService;

    constructor() {
        this.initLikesStorage();
    }

    public static getInstance(): PostLikesService {
        if (!PostLikesService.instance) {
            PostLikesService.instance = new PostLikesService();
        }
        return PostLikesService.instance;
    }

    public updateUserLikes(likes: number[]) {
        if (typeof window !== 'undefined') {
            localStorage.setItem('user-likes', JSON.stringify(likes));
        }
    }

    public getUserLikes(): number[] {
        let localLikes = this.parseLikes();
        return localLikes ?? [];
    }

    private initLikesStorage() {
        if (typeof window !== 'undefined') {
            let oldLikes = this.parseLikes();
            if (!oldLikes || oldLikes.length <= 0) {
                localStorage.removeItem('user-likes');
                localStorage.setItem('user-likes', JSON.stringify([]));
            }
        }
    }

    private parseLikes(): number[] | undefined {
        let parsedLikes: number[] | undefined = undefined;
        if (typeof window !== 'undefined') {
            let likes = localStorage.getItem('user-likes');
            if (likes) {
                try {
                    parsedLikes = JSON.parse(likes);
                } catch (e) {

                }
            }
        }
        return parsedLikes;
    }
}

export const postLikesService = PostLikesService.getInstance();
