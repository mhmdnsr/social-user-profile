import React, {useEffect, useState} from "react";
import {NextComponentType, NextPageContext} from "next";
import UserStoryStyles from "@styles/components/stories/user-story.module.scss"
import {IUserStory} from "@interfaces/user-story.interface";
import {Avatar} from "antd";
import {IoMdAdd} from "react-icons/io";


const UserStory: NextComponentType<NextPageContext, unknown, { story: IUserStory, isAdd?: boolean }> =
    ({
         story, isAdd
     }) => {
        const [isSeen, setIsSeen] = useState<boolean>(false);

        useEffect(() => {
            setIsSeen(story.isSeen);
        }, [])

        return (
            <div className={UserStoryStyles.user_story} onClick={() => setIsSeen(true)}>
                {isSeen}
                <div
                    className={`${UserStoryStyles.user_story__outer_view} ${isSeen ? UserStoryStyles.user_story__outer_view_seen : ''}`}>
                    {isAdd ?
                        <div
                            className={isAdd ? UserStoryStyles.user_story__avatar_overlay : ''}>
                            <IoMdAdd className={UserStoryStyles.user_story__avatar_overlay_icon}/>
                        </div> : ''}
                    {story.image ? <Avatar size={60} src={story.image} className={UserStoryStyles.user_story__avatar}/>
                        : <Avatar size={60} className={UserStoryStyles.user_story__avatar}>{story.name[0]}</Avatar>
                    }
                </div>
                <div className={UserStoryStyles.user_story__info}>
                    <p>{story.name.split(' ')[0]}</p>
                </div>
            </div>
        );
    }

export default UserStory;
