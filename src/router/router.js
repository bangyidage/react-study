import {Fragment} from 'react';
import {Switch, Route} from 'react-router-dom';
import routerList from './json';

const RouterConfigs = (routerLists) => {
    return routerLists.map((item, index) => {
        const {path, component: LazyComponents, routes} = item;
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
