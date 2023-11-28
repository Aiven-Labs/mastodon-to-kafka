import {login} from "masto";
import dotenv from "dotenv";
dotenv.config();

export default async (onStream: (status: string) => void) => {
    try {
        const masto = await login({
            url: 'https://mastodon.social/',
            accessToken: process.env["mastodon.token"]
        });

        // Connect to the streaming api
        const stream = await masto.stream.streamPublicTimeline();

        // Subscribe to updates
        stream.on('update', (status) => {
            console.log('New message received from Mastodon timeline, from user ', status.account.displayName);
            onStream(JSON.stringify(status));
        });
    } catch (err) {
        console.log(err)
    }
};
