import React from 'react';
import stylus from './stylus.styl';
import classNames from "classnames";
import loading from "../../components/loading";
const ctx = classNames.bind(stylus);

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state =  {
            user:'',
            pass:'',
            loading:false
        }
        this.rdiv = React.createRef();
    }
    componentDidMount() {
    }
    toLogin = ()=>{
        const {user,pass} = this.state;
        loading.open({
            content:'loading'
        });
        setTimeout(function () {
            loading.close();
        },30000)
    }
    changeValue = (name,value)=>{
        this.setState({
            [name]:value
        })
    }

    render() {
        const {user,pass,loading} = this.state;
        return (
           <div className={ctx('page-login')}>
                 <label htmlFor={"user"}> 账户</label>  <input  id="user" value={user}  onChange={(e)=>this.changeValue('user',e.target.value)}/>
                 <label htmlFor={"pass"}> 密码</label>  <input id={"pass"} value={pass} onChange={(e)=>this.changeValue('pass',e.target.value)} />
                  <button onClick={this.toLogin} disabled={loading}>登 录</button>
           </div>
        )
    }
}

export default Login;
