import React from 'react';
import stylus from './stylus.styl';
import classNames from "classnames/bind";
import PageTitle from "../../components/PageTitle";
const ctx = classNames.bind(stylus);

export default class Tourist extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            searchValue:'',
        }
    }
    componentDidMount() {
        console.log(this.props);
    }


    render() {
        return (
            <div className={ctx('pageTourist')}>
                <PageTitle />
            </div>
        )
    }
}
