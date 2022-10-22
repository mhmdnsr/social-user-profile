import type {NextPage} from 'next';
import Head from 'next/head';
import HomeModule from "@pages/home";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <HomeModule/>
        </>
    );
}

export default Home
