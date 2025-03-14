
export default [
    {
        path: "/",
        name: "Home",
        redirect: "/index",
        children: [
            {
                path: "/index",
                name: "Index",
                component: () => import("@/views/home/index.vue"),

            },
        ],
    },




];

