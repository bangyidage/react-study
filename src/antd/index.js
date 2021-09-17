import React from 'react';
import Page from "../components/Page";
import {Affix, Button} from "antd";

export default class Antd extends React.Component{

    componentDidMount() {
        document.title="antd"
        console.log(window.location);
    }
    render() {
        console.log(this.props);
        return(
            <Page
                isLoading={false}
            >
                <Affix offsetTop={10}>
                    <Button type="primary">
                        Affix top
                    </Button>
                </Affix>
                <br />
                <Affix offsetBottom={100}>
                    <Button type="primary" >
                        Affix bottom
                    </Button>
                </Affix>
            </Page>
        )
    }
}
