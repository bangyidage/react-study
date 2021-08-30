import React from 'react';
import ReactDOM from 'react-dom'
import stylus from './stylus.styl';
import classNames from "classnames/bind";

const ctx = classNames.bind(stylus);

const LoadingNode = (props) => {
    const {content} = props;
    return (
        <div className={ctx('loading-mask-box-npsp')}>
            <div className={ctx('loading-la-dl')}>
                <div className={ctx('loading-cir-la')}></div>
                <div className={ctx('loading-cir-la-content')}>{content ? content : '正在刷新'}</div>
            </div>

        </div>
    )
}

class Loading extends React.Component {
    constructor(props) {
        super(props);
        let element = document.createElement('div')
        element.id = 'other-root';
        this.state = {
            element,
        }
    }

    open = (data) => {
        const {element} = this.state;
        document.body.appendChild(element);
        ReactDOM.render(
            <LoadingNode
                content={data.content}
            />,
            element);
    }
    close = () => {
        const {element} = this.state;
        element.remove()
    }
}

const loading = new Loading();
export default loading;



