import React from "react";
import {NextComponentType, NextPageContext} from "next";
import PostCardActionsStyles from "@styles/components/cards/post-card/post-card-actions.module.scss";
import {RiHeart2Fill} from "react-icons/ri";
import {AiFillMessage} from "react-icons/ai";

interface PostCardActionsProps {
    isLiked: boolean,
    likesCount: number,
    commentsCount: number,
    onLikeToggle: () => void
}


const PostCardActions: NextComponentType<NextPageContext, unknown, PostCardActionsProps> = (
    {
        isLiked,
        likesCount,
        commentsCount,
        onLikeToggle
    }
) => {
    return (
        <div className={PostCardActionsStyles.post_card_actions}>
            <div
                onClick={onLikeToggle}
                className={`${PostCardActionsStyles.post_card_actions__action} ${isLiked ? PostCardActionsStyles.post_card_actions__action_colored : ''}`}>
                <RiHeart2Fill className={PostCardActionsStyles.post_card_actions__action_icon}/>
                <p className={PostCardActionsStyles.post_card_actions__action_count}>{likesCount}</p>
            </div>
            <div className={PostCardActionsStyles.post_card_actions__action}>
                <AiFillMessage className={PostCardActionsStyles.post_card_actions__action_icon}/>
                <p className={PostCardActionsStyles.post_card_actions__action_count}>{commentsCount}</p>
            </div>
        </div>
    );
}

export default PostCardActions;
