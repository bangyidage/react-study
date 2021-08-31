import React from 'react';
import PageTitle from "../PageTitle";

export default class Page extends React.Component{
    render() {
        const {isShowNav,children} = this.props;
        return (
            <div className='page'>
                {
                    isShowNav && <PageTitle />
                }
                {
                    children
                }
            </div>
        )
    }
}
