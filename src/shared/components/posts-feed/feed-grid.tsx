import React from "react";
import {NextComponentType, NextPageContext} from "next";
import {IPost} from "@interfaces/post.interface";
import {Col, Row} from "antd";
import FeedGridStyle from "@styles/components/posts-feed/feed-grid.module.scss";
import PostCard from "@components/cards/post-card";

const FeedGrid: NextComponentType<NextPageContext, unknown, { posts: IPost[] }> = ({posts}) => {
    return (
        <Row className={FeedGridStyle.feed_grid} gutter={{xs: 20, sm: 20, md: 30, lg: 30, xl: 30, xxl: 30}}>
            {
                posts.map((post, index) => {
                    return (
                        <Col xs={24} sm={12} md={12} lg={8} xl={8} xxl={6} className={FeedGridStyle.feed_grid__item}
                             key={`post-container-${post.id}-${index}`}>
                            <PostCard post={post}/>
                        </Col>
                    );
                })
            }
        </Row>
    );
}

export default FeedGrid;
