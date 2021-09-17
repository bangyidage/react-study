import React from 'react';
import stylus from './stylus.styl';
import classNames from 'classnames/bind';

const ctx = classNames.bind(stylus);

export default class MouseAndKeyDown extends React.Component {
    render() {
        return (
          <div>

                <h3 className={ctx('page-mouse')}
                >鼠标键盘事件</h3>
          </div>
        )
    }
}
