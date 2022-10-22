import type {NextPage} from 'next'
import Head from 'next/head'
import SavedPostsModule from "@pages/saved-posts";

const SavedPosts: NextPage = () => {
    return (
        <>
            <Head>
                <title>Saved Posts</title>
            </Head>
            <SavedPostsModule/>
        </>
    );
}

export default SavedPosts
