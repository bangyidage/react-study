import {Component} from 'react';
import styles from './styl.styl';
import classNames from "classnames/bind";

const ctx = classNames.bind(styles);
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: true,
        }
    }

    componentDidMount() {
    }

    render() {
        const {flag} = this.state;
        return (
            <div className={ctx('page-home', flag?'p':'')}>
                sdf
            </div>
        )
    }
}
