import React from 'react';
import stylus from './stylus.styl';
import classNames from "classnames/bind";
import Page from "../../components/Page";
import {Menu, Button} from 'antd';
import {myNavLife} from './file.json';

const ctx = classNames.bind(stylus);

export default class Tourist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: '',
        }
    }

    pageTo = (value) => {
        // window.location.href = `/${value}`;
        // window.location.replace(`/${value}`)
        this.props.history.push(`/${value}`)
    }

    render() {
        return (
            <Page
                className={ctx('pageTourist')}
                isShowNav={true}
                isLoading={false}
            >
                <div className={ctx('milder')}>
                    <Menu
                        mode="inline"
                        theme={"light"}
                        inlineIndent={16}
                    >
                        {
                            myNavLife.map(({value, id}) => {
                                return (<Menu.Item key={id}>{value}</Menu.Item>)
                            })
                        }
                    </Menu>
                </div>
                <div className={ctx("main")}>
                    <Button onClick={this.pageTo.bind(this,'antd')}>antd</Button>
                </div>
            </Page>
        )
    }
}
