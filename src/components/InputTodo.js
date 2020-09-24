import React, { Component } from 'react'

class InputTodo extends Component {
    state = {
        title: ""
    };
    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodoProps(this.state.title);
        this.setState({
            title: ""
        });
    };
    render() {
        return ( 
            <form onSubmit={this.handleSubmit} className="form-container" >
                <input 
                className="input-text" 
                type="text"
                name="title" 
                placeholder="Add To-Do..." 
                value={this.state.title} 
                onChange={this.onChange} />
                <input type="submit" className="input-submit" value="Submit" />
            </form>
        );
    }
}

export default InputTodo
