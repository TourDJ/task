import React, { Component } from 'react';
import TaskItem from './TaskItem';
import logo from './logo.svg';
/* import './App.css'; */

class Task extends Component {


    constructor(props) {
        super(props);
        this.state = {
            list: [],
            inputValue: ''
        }
    }
    
    handleChange(e) {
        this.setState({
            inputValue: e.target.value
        });
    }

    handleClick(){
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        }) 
    }


    handleDelete(index) {
        const list = [...this.state.list];
        list.splice(index, 1);
        this.setState({list});
    }

    TaskItems() {
        return ( 
            this.state.list.map((item, index) => {
                    return <TaskItem delete={this.handleDelete.bind(this)} key={index} content={item} index={index} />
            })
        )
    }
  
  render() {
    return (
      <div>
        <div>
            <input value={this.state.inputValue} onChange={this.handleChange.bind(this)}/>
            <button onClick={this.handleClick.bind(this)}>add</button>
        </div>
        <ul>
            {this.TaskItems()}
        </ul>
      </div>
    );
  }
}

export default Task;
