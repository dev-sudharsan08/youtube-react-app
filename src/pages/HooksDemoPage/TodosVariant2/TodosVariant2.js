import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useReducer, useRef, useEffect } from 'react';
import todoReducer from '../../../reducers/todoReducer';

const TodosVariant2 = () => {
  // create a ref for the input field to capture the entered input in a fn comp
  const todoInput = useRef('');
  const index1 = useRef('');
  console.log(todoInput);
  console.log(index1);

  const [todoList, todoDispatch] = useReducer(todoReducer);
  console.log(todoList); // get the state data from reducer here
  console.log(todoDispatch); // fn to update the state data
  /// dispatch must be called with action.

  useEffect(() => {
    // ideal place for making rest api calls
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then((res) => {
        return res.json();
      })
      .then((todoItems) => {
        console.log(todoItems);
        todoDispatch({
          type: 'LIST_TODOS',
          payload: todoItems
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleAddTodo = () => {
    console.log(todoInput.current.value); // entered input
    todoDispatch({
      type: 'ADD_TODO',
      payload: {
        id: Math.floor(Math.random() * 10000),
        title: todoInput.current.value,
        completed: false
      }
    });
  };

  const handleSaveTodo = () => {
    console.log(todoInput.current.value);
    const Index =
      todoList?.some((todo) => todo.title === todoInput.current.value) &&
      todoList.findIndex((todo) => todo?.title === todo.title);
    console.log(Index); // entered input
    todoDispatch({
      type: 'SAVE_TODO',
      payload: {
        id: Math.floor(Math.random() * 10000),
        title: todoInput.current.value,
        completed: false
      },
      list: todoList,
      index: index1
    });
  };

  const handleCheckTodo = (todo) => {
    todoDispatch({
      type: 'CHECK_TODO',
      payload: todo
    });
  };

  const handleEditTodo = (todo) => {
    todoInput.current.value = todo.title;
    todoDispatch({
      type: 'EDIT_TODO',
      payload: todo
    });
  };

  // const handleSaveTodo = (todo) => {
  //   // todoInput.current.value = todo.title;
  //   todoDispatch({
  //     type: 'SAVE_TODO',
  //     payload: todo
  //   });
  // };

  const handleDeleteTodo = (todo) => {
    todoDispatch({
      type: 'DELETE_TODO',
      payload: todo
    });
  };
  // const handleCheckBox = (event) => {
  //   console.log(event);
  //   if (event.target.checked) {
  //     todoList[0].isCompleted = true;
  //   } else {
  //     todoList[0].isCompleted = false;
  //   }
  //   todoDispatch((current) => !current);
  // };

  return (
    <div style={{ background: '#00dd00', padding: '20px' }}>
      <h3>Todos App with useReducer</h3>
      <div className='row'>
        <div className='col-auto'>
          <input type='text' className='form-control' ref={todoInput} />
        </div>
        <div className='col-auto'>
          <button type='button' className='btn btn-primary ms-3' onClick={handleSaveTodo}>
            Save
          </button>
          <button type='button' className='btn btn-primary ms-3' onClick={handleAddTodo}>
            ADD TODO
          </button>
        </div>
      </div>

      <div className='row mt-3'>
        <div className='col-md-12'>
          <div className='card'>
            <ul className='list-group-item ms-3'>
              {todoList?.map((todo, index) => {
                return (
                  <div className='d-flex mt-2' key={todo.id}>
                    <input
                      type='checkbox'
                      className='form-check-input'
                      onChange={handleCheckTodo.bind(this, todo)}
                      checked={todo.completed}
                    />
                    <li
                      style={{ textDecoration: todo.completed ? 'line-through' : '' }}
                      className='list-group-item ms-3 me-3'>
                      {todo.title}
                    </li>
                    <button
                      type='button'
                      className='btn btn-outline-warning ms-2'
                      onClick={handleEditTodo.bind(this, todo)}
                      ref={index1}>
                      <FontAwesomeIcon icon='fa-solid fa-pencil' />
                    </button>
                    <button
                      type='button'
                      className='btn btn-outline-danger ms-3'
                      onClick={handleDeleteTodo.bind(this, todo)}>
                      X
                    </button>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodosVariant2;
