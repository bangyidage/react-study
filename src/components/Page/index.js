import React, {Fragment} from 'react';
import Nav from '../Nav';
import classNames from "classnames/bind";
import stylus from './stylus.styl';
import NotFound from "../../pages/notFound";
const ctx = classNames.bind(stylus);
export default class Page extends React.Component{
    render(){
        const {isShowNav, children,className,isLoading} = this.props;
        if(isLoading){
            return <NotFound />
        }
        return(
            <Fragment>
                {
                    isShowNav && <Nav />
                }
                <div className={`${className} ${ctx('page')}`} style={{paddingTop:isShowNav?"70px":""}}>
                    {
                        children
                    }
                </div>
            </Fragment>
        )
    }
}
