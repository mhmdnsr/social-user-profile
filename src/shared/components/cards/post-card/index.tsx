import React, {useEffect, useState} from "react";
import {NextComponentType, NextPageContext} from "next";
import {IPost} from "@interfaces/post.interface";
import PostCardStyles from "@styles/components/cards/post-card/post-card.module.scss";
import Image from "next/image";
import PostCardUser from "@components/cards/post-card/post-card-user";
import PostCardActions from "@components/cards/post-card/post-card-actions";
import {useAppDispatch, useAppSelector} from "@app-hooks/store.hook";
import {addLikeToLikesState, deleteLikeFromLikesState} from "@app-store/slices/likes.slice";

const PostCard: NextComponentType<NextPageContext, unknown, { post: IPost }> = ({post}) => {

    const likes = useAppSelector(state => state.likesState.likes);
    const dispatch = useAppDispatch();
    const [isPostLiked, setIsPostLiked] = useState<boolean>(false);

    const checkIfPostLiked = (): boolean => {
        let uniqueLikes = new Set(likes);
        return uniqueLikes.has(post.id);
    }

    const togglePostLike = () => {
        if (isPostLiked) {
            dispatch(deleteLikeFromLikesState(post.id));
        } else {
            dispatch(addLikeToLikesState(post.id));
        }
    }

    useEffect(() => {
        setIsPostLiked(checkIfPostLiked());
    }, [likes])

    return (
        <div className={PostCardStyles.post_card}>
            <div className={PostCardStyles.post_card__image}>
                <Image className={PostCardStyles.post_card__image_img} layout='fill' src={post.image}
                       alt={`${post.user.name}'s post`}/>
            </div>
            <div className={PostCardStyles.post_card__info}>
                <div className={PostCardStyles.post_card__info_user}>
                    <PostCardUser user={post.user}/>
                </div>
                <div className={PostCardStyles.post_card__info_actions}>
                    <PostCardActions onLikeToggle={togglePostLike}
                                     isLiked={isPostLiked}
                                     likesCount={isPostLiked ? (post.likesCount + 1) : post.likesCount}
                                     commentsCount={post.commentsCount}/>
                </div>
            </div>
        </div>
    );
}

export default PostCard;
