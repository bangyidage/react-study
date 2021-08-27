import {Fragment, lazy} from 'react';
import {Switch, Route} from 'react-router-dom';

const routerList = [
    {
        path: "/", name: "首页", exact: true, component: lazy(() => import('../pages/tourist'))
    },
    {
        path: "/home", name: "首页", exact: true, component: lazy(() => import('../pages/home'))
    },
    {
        path: "/login", name: "登录", exact: true, component: lazy(() => import('../pages/login/index'))
    },
    {
        path: "/component/page", name: "page", exact: true, component: lazy(() => import('../components/Page'))
    },
    {
        path: "/component/pageTitle",
        name: "Title",
        exact: true,
        component: lazy(() => import('../components/PageTitle'))
    },
    {
        path: "/event/mouseAndKeyDown",
        name: "键盘鼠标事件",
        exact: true,
        component: lazy(() => import('../event/mouseAndKeyDown'))
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
                component: lazy(() => import('../components/PageTitle/index')),
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
const RouterConfigs = (routerLists) => {
    return routerLists.map((item, index) => {
        const {path, component: LazyComponents, routes,name} = item;
        if (!routes || routes.length === 0) {
            return (
                <Route key={index + path} path={path} exact render={(props) => <LazyComponents {...props} />}></Route>
            )
        } else {
            return (
                <Fragment key={index + path}>
                    <Route key={index + path} path={path} exact render={(props) => <LazyComponents {...props} />}></Route>
                    <Switch key={'switch' + index}>
                        {RouterConfigs(routes)}
                    </Switch>
                </Fragment>
            )
        }
    })
}

const initRouters = RouterConfigs(routerList);
export default initRouters;
