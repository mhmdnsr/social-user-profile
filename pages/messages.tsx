import type {NextPage} from 'next'
import Head from 'next/head'
import MessagesModule from "@pages/messages";

const Messages: NextPage = () => {
    return (
        <>
            <Head>
                <title>Messages</title>
            </Head>
            <MessagesModule/>
        </>
    );
}

export default Messages
