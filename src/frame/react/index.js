import React from 'react';

export default class ReactFrame extends React.Component{
    render(){
        console.log(this.props);
        return(
            <div className='react-frame'>
                <h1>react</h1>
                <select multiple={true}  onChange={this.handleChange}>
                    <option value="grapefruit">葡萄柚</option>
                    <option value="lime">酸橙</option>
                    <option value="coconut">椰子</option>
                    <option value="mango">芒果</option>
                </select>
            </div>
        )
    }
}
