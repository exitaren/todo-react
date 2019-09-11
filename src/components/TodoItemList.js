import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
    render(){
        const { todos, onToggle, onRemove } = this.props;

        return (
            <div>
                <TodoItem text="안녕"/>
                <TodoItem text="누가 기침소리를 내었는가"/>
                <TodoItem text="누가 기침소리를 내었으냔 말이야!"/>
            </div>
        )
    }
}

export default TodoItemList;