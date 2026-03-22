import { useRouter } from "vue-router";

export const useRouterNavigation = () => {
    const router = useRouter();

    const back = async () => {
        if (history.length <= 1) {
            await router.push({
                path: "/",
            });

            return;
        }

        router.back();
    };

    return {
        back,
    };
};