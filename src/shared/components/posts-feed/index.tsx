import React, {useCallback, useEffect, useState} from "react";
import {NextComponentType, NextPageContext} from "next";
import {IPost} from "@interfaces/post.interface";
import PostsFeedStyles from "@styles/components/posts-feed/posts-feed.module.scss";
import FeedGrid from "@components/posts-feed/feed-grid";
import FeedFilter from "@components/posts-feed/feed-filter";
import PostsFilterService from "@services/posts-filter.service";

const PostsFeed: NextComponentType<NextPageContext, unknown, { posts: IPost[] }> = ({posts}) => {

    const [currentPosts, setCurrentPosts] = useState<IPost[]>(posts);

    const getFollowingPosts = useCallback(() => {
        let followingPosts = PostsFilterService.getFollowingPosts([...posts]);
        setCurrentPosts(followingPosts);
    }, [posts]);

    const getNewestPosts = useCallback(() => {
        let newestPosts = PostsFilterService.getNewestPosts([...posts]);
        setCurrentPosts(newestPosts);
    }, [posts]);

    const getPopularPosts = useCallback(() => {
        let popularPosts = PostsFilterService.getPopularPosts([...posts]);
        setCurrentPosts(popularPosts);
    }, [posts]);

    const onFilterChange = (id: number) => {
        switch (id) {
            case 0:
                setCurrentPosts(posts);
                break;
            case 1:
                getFollowingPosts();
                break;
            case 2:
                getNewestPosts();
                break;
            case 3:
                getPopularPosts();
                break;
            default:
                setCurrentPosts(posts);
                break;
        }
    }

    useEffect(() => {
        onFilterChange(0);
    }, [posts]);


    return (
        <div className={PostsFeedStyles.posts_feed}>
            <div className={PostsFeedStyles.posts_feed__header}>
                <div className={PostsFeedStyles.posts_feed__header_title}>
                    <h3>Feeds</h3>
                </div>
                <div className={PostsFeedStyles.posts_feed__header_filters}>
                    <FeedFilter onFilterChange={onFilterChange}/>
                </div>
            </div>
            <div className={PostsFeedStyles.posts_feed__posts}>
                <FeedGrid posts={currentPosts}/>
            </div>
        </div>
    );
}

export default PostsFeed;
