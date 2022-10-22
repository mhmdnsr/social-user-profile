import React from "react";
import {NextComponentType, NextPageContext} from "next";
import {IPostUser} from "@interfaces/post.interface";
import PostCardUserStyles from "@styles/components/cards/post-card/post-card-user.module.scss";
import {Avatar} from "antd";

const PostCardUser: NextComponentType<NextPageContext, unknown, {user: IPostUser}> = ({user}) => {
    return (
        <div className={PostCardUserStyles.post_card_user}>
            <Avatar size={35} className={PostCardUserStyles.post_card_user__avatar} src={user.image} alt={user.name}/>
            <div title={user.name} className={PostCardUserStyles.post_card_user__info}>
                <p>{user.name}</p>
            </div>
        </div>
    );
}

export default PostCardUser;
