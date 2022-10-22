import React, {useCallback, useEffect, useState} from "react";
import {NextComponentType} from "next";
import HomeModuleStyles from "@styles/pages/HomeModule.module.scss";
import Stories from "@components/stories";
import {IUserStory} from "@interfaces/user-story.interface";
import {IPost} from "@interfaces/post.interface";
import {Divider} from "antd";
import PostsFeed from "@components/posts-feed";
import {postLikesService} from "@services/post-likes.service";
import {useAppDispatch} from "@app-hooks/store.hook";
import {setLikesState} from "@app-store/slices/likes.slice";
import DemoDataService from "@services/demo-data.service";

const HomeModule: NextComponentType = () => {

    const [userStories, setUserStories] = useState<IUserStory[]>([]);
    const [posts, setPosts] = useState<IPost[]>([]);
    const dispatch = useAppDispatch();


    const getUserStories = useCallback(() => {
        DemoDataService.getUserStories().then((stories) => {
            setUserStories(stories);
        }).catch((e) => {
            console.log(e);
        })
    }, []);

    const getPosts = useCallback(() => {
        DemoDataService.getPosts().then((postsRes) => {
            setPosts(postsRes);
        }).catch((e) => {
            console.log(e);
        })
    }, []);

    const initLikesState = () => {
        let localLikes = postLikesService.getUserLikes();
        dispatch(setLikesState(localLikes))
    }

    useEffect(() => {
        initLikesState();
        getUserStories();
        getPosts();
    }, [])

    return (
        <div className={`page-wrapper ${HomeModuleStyles.home}`}>
            <div className={HomeModuleStyles.home__stories}>
                <Stories stories={userStories}/>
            </div>
            <Divider/>
            <div className={HomeModuleStyles.home__feeds}>
                <PostsFeed posts={posts}/>
            </div>
        </div>
    );
}

export default HomeModule;
