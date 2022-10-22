import type {NextPage} from 'next'
import Head from 'next/head'
import SettingsModule from "@pages/settings";

const Settings: NextPage = () => {
    return (
        <>
            <Head>
                <title>Settings</title>
            </Head>
            <SettingsModule/>
        </>
    );
}

export default Settings
