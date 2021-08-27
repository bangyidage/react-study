import {Component, Suspense} from 'react';
import {BrowserRouter, Switch} from 'react-router-dom';
import initRouters from './router';
import NotFound from "../pages/notFound";

class MyRouter extends Component {
    componentDidMount() {
        console.log(this.props);
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Suspense fallback={<NotFound />}>
                        {initRouters }
                    </Suspense>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default MyRouter;
