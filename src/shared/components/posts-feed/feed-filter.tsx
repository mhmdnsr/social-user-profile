import React, {useState} from "react";
import {NextComponentType, NextPageContext} from "next";
import FeedFilterStyles from "@styles/components/posts-feed/feed-filter.module.scss";

const FeedFilter: NextComponentType<NextPageContext, unknown, { onFilterChange: (id: number) => void }> = ({onFilterChange}) => {
    const filters: string[] = ['All', 'Following', 'Newest', 'Popular'];
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const changeFilter = (index: number) => {
        setActiveIndex(index);
        onFilterChange(index);
    }

    return (
        <div className={FeedFilterStyles.feed_filter}>
            {
                filters.map((filter, index) => {
                    return (
                        <p
                            onClick={() => changeFilter(index)}
                            className={`${FeedFilterStyles.feed_filter__item} ${index === activeIndex ? FeedFilterStyles.feed_filter__item_active : ''}`}
                            key={`${filter}-index-${index}`}>
                            {filter}
                        </p>
                    );
                })
            }
        </div>
    );
}

export default FeedFilter;
