import React, {useEffect} from "react";
import {NextComponentType, NextPageContext} from "next";
import {IUserStory} from "@interfaces/user-story.interface";
import StoriesStyles from "@styles/components/stories/stories.module.scss";
import UserStory from "@components/stories/user-story";
import useEmblaCarousel, {EmblaOptionsType} from "embla-carousel-react";

const Stories: NextComponentType<NextPageContext, unknown, { stories: IUserStory[] }> = ({stories}) => {

    const emblaOption: EmblaOptionsType = {
        align: 'start',
        loop: false,
        startIndex: 0,
        dragFree: true,
        direction: 'ltr',
        skipSnaps: true,
        containScroll: 'trimSnaps',
        draggable: true,
    };

    const [emblaRef, emblaApi] = useEmblaCarousel(emblaOption);

    useEffect(() => {
        if (emblaApi) {
            emblaApi.reInit(emblaOption);
        }
    }, [stories])

    return (
        <div className={StoriesStyles.stories}>
            <div className={StoriesStyles.stories__carousel} ref={emblaRef}>
                <div className={StoriesStyles.stories__carousel_container}>
                    <div className={StoriesStyles.stories__carousel_slide} key='add-user-story'>
                        <UserStory story={{id: 0, name: 'Mohamed Nsr', isSeen: true}} isAdd={true}/>
                    </div>
                    {stories.map((story) => {
                        return (
                            <div className={StoriesStyles.stories__carousel_slide} key={`user-story-${story.id}`}>
                                <UserStory story={story}/>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Stories;
