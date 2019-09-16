import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList'

class App extends Component {

  id = 3  //이미 0, 1, 2가 존재하므로 3으로 설정

  state = {
    input : '',
    todos: [
      {id : 0, text : '오지고', checked : false },
      {id : 1, text : '지리고', checked : true },
      {id : 2, text : '렛잇고', checked : false },
    ]
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value  //input의 다음 바뀔값
    });
  }

  handleCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input: '', //인풋 비우고
      // concat을 이용해 배열에 추가
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false
      })
    })
  }

  handleKeyPress = (e) => {
    // 눌려진 key가 enter이면 handleCreate 호출
    if(e.key === 'Enter'){
      this.handleCreate();
    }
  }

  handleToggle = (id) => {
    const { todos } = this.state;

    // 파라미터로 받은 id를 가지고 몇 번째 아이템인지 찾기
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index]; //선택한 객체

    const nextTodos = [...todos]; //배열 복사

    // 기존값 복사, checked 값 덮어쓰기
    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    };

    this.setState({
      todos : nextTodos
    })
  }

  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    })
  }

  render() {
    const { input, todos } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove
    } = this;

    return (
      <TodoListTemplate form={(
      <Form
        value={input}
        onKeyPress={handleKeyPress}
        onChange={handleChange}
        onCreate={handleCreate}
      />
      )}>
        <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove} />
      </TodoListTemplate>
    );
  }
}

export default App;