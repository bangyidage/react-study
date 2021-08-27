import React from 'react';
import {Button, Input, Form, Checkbox,Row,Col} from 'antd';


const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};
export default class AuthLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: ''
        }
    }
    onFormFinsh = (value)=>{
        console.log(value);
    }
    render() {
        return (
            <Form
                colon={true}
                layout={"horizontal"}
                onFinish={this.onFormFinsh}
                size={"large"}
                initialValues={{user:'',pass:'',remember:true}}
            >
                    <Form.Item
                        label={'user'}
                        name={'user'}
                    >
                        <Input />
                    </Form.Item>
                <Form.Item
                    label={'pass'}
                    name={'pass'}
                    rules={[
                        {
                            type:'string',
                            message:'字符串类型',
                        }
                    ]}
                >
                    <Input />
                </Form.Item>
                    <Button type="primary" size={'large'} htmlType={'submit'}>登录</Button>
            </Form>
        )
    }
}
