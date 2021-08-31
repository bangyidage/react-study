import React from 'react';
import Page from "../../components/Page";
import stylus from './stylus.styl';
import classNames from 'classnames/bind';
import PageTitle from "../../components/PageTitle";

const ctx = classNames.bind(stylus);

export default class MouseAndKeyDown extends React.Component {
    render() {
        return (
          <div>
              <PageTitle />
                <h3 className={ctx('page-mouse')}
                >鼠标键盘事件</h3>
          </div>
        )
    }
}
