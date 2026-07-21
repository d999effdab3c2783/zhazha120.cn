export default defineAppConfig<{
    readonly dev: {
        readonly codetime: {
            readonly user_id: number;

            readonly widgets: {
                readonly badge: {
                    readonly coding_time: string;
                    readonly tokens: string;
                };

                readonly top: {
                    readonly languages: string;
                    readonly projects: string;
                };

                readonly status: string;
                readonly calendar: string;
                readonly trend: string;
                readonly usage: string;
            };
        };
    };
}>({
    dev: {
        codetime: (() => {
            const user_id = 2270;

            return {
                domain: `codetime.dev`,
                user_id,

                widgets: {
                    badge: {
                        coding_time:
                            "https://shields.jannchie.com/endpoint?style=for-the-badge&url=" +
                            encodeURIComponent(
                                `https://codetime.dev/v3/users/shield?uid=${user_id}`,
                            ),
                        tokens:
                            "https://shields.jannchie.com/endpoint?style=for-the-badge&url=" +
                            encodeURIComponent(
                                `https://codetime.dev/v3/users/shield?uid=${user_id}&metric=tokens`,
                            ),
                    },
                    top: {
                        languages: `https://codetime.dev/api/widgets/donut.svg?uid=${user_id}&theme={theme}`,
                        projects: `https://codetime.dev/api/widgets/donut.svg?uid=${user_id}&mode=projects&theme={theme}`,
                    },
                    status: `https://codetime.dev/api/widgets/status.svg?uid=${user_id}&theme={theme}`,
                    calendar: `https://codetime.dev/api/widgets/calendar.svg?uid=${user_id}&theme={theme}`,
                    trend: `https://codetime.dev/api/widgets/trend.svg?uid=${user_id}&theme={theme}`,
                    usage: `https://codetime.dev/api/widgets/usage.svg?uid=${user_id}&theme={theme}`,
                },
            };
        })(),
    },
});