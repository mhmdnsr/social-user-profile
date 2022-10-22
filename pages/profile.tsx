import type {NextPage} from 'next'
import Head from 'next/head'
import ProfileModule from "@pages/profile";

const Profile: NextPage = () => {
    return (
        <>
            <Head>
                <title>Profile</title>
            </Head>
            <ProfileModule/>
        </>
    );
}

export default Profile
