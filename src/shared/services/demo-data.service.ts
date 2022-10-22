import HttpClientService from "@services/http-client.service";
import {IUserStory} from "@interfaces/user-story.interface";
import {IPost} from "@interfaces/post.interface";

export default class DemoDataService {
    public static getUserStories(): Promise<IUserStory[]> {
        return new Promise<IUserStory[]>((resolve, reject) => {
            HttpClientService.sendGet<{stories: IUserStory[]}>('/api/demo-stories')
                .then(({stories}) => {
                    resolve(stories);
                }).catch(reject)
        });
    }

    public static getPosts(): Promise<IPost[]> {
        return new Promise<IPost[]>((resolve, reject) => {
            HttpClientService.sendGet<{posts: IPost[]}>('/api/demo-posts')
                .then(({posts}) => {
                    resolve(posts);
                }).catch(reject)
        });
    }
}
