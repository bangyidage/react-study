import {Component, Suspense} from 'react';
import {HashRouter, Switch} from 'react-router-dom';
import initRouters from './router';
import NotFound from "../pages/notFound";

class MyRouter extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Suspense fallback={<NotFound />}>
                        {initRouters }
                    </Suspense>
                </Switch>
            </HashRouter>
        )
    }
}

export default MyRouter;
