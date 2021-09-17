import {lazy} from "react";

const routerList = [
    {
        path: "/", name: "首页", exact: true, component: lazy(() => import('../pages/tourist'))
    },
    {
        path: "/antd", name: "首页", exact: true, component: lazy(() => import('../antd'))
    },
    {
        path: "/login", name: "登录", exact: true, component: lazy(() => import('../pages/login/index'))
    },
    {
        path: "/home", name: "首页", exact: true, component: lazy(() => import('../pages/home'))
    },
    {
        path: "/component/page", name: "page", exact: true, component: lazy(() => import('../components/Page'))
    },
    {
        path: "/event/mouseAndKeyDown", name: "mouseAndKeyDown", exact: true, component: lazy(() => import('../event/mouseAndKeyDown'))
    },
    {
        path: "/frame/react", name: "react", exact: true, component: lazy(() => import('../frame/react'))
    },
    {
        path: "/main",
        name: "用户管理",
        exact: true,
        component: lazy(() => import('../pages/login/index')),
        routes: [
            {
                path: "/main/list",
                name: "用户列表",
                exact: true,
                component: lazy(() => import('../components/Page/index')),
                routes: [
                    {
                        path: "/user/userList/userDetail",
                        name: "用户详情",
                        exact: true,
                        component: lazy(() => import('../components/Page/index')),
                    }
                ]
            }
        ]
    },
    {
        path: "/notfound", name: "react", exact: true, component: lazy(() => import('../pages/notFound'))
    },
];
export default routerList;
