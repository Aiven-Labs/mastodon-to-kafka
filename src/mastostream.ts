import {login} from "masto";

export default async (onStream: (status: string) => void) => {
    try {
        const masto = await login({
            url: 'https://mastodon.social/',
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
