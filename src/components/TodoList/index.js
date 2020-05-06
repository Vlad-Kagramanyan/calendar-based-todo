import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import useClickOutside from '../../hooks/useClickOutside';
import Header from '../Header';
import CreateItemModal from '../CreateItemModal';
import { addItem, deleteItem, changeItem } from '../../actions/todoActions';
import TodoItem from '../TodoItem';
import useInput from '../../hooks/useInput';
import './style.scss';

const TodoList = ({
  todos, onChangeItem, onAddItem, onDeleteItem,
}) => {
  const { id } = useParams();
  const [element, flag, setFlag] = useClickOutside();
  const [titleVal, setTitleVal] = useInput('');
  const [portalEl, setPortalEl] = useInput(document.createElement('div'));

  useEffect(() => {
    document.body.appendChild(portalEl);
    return () => {
      document.body.removeChild(portalEl);
    };
  }, []);

  const filteredByTitle = todos.filter(
    (todo) => todo.date === +id && todo.title.includes(titleVal),
  );

  const openModal = () => {
    setFlag(true);
  };

  const addTodo = ({ title, desc }) => {
    onAddItem({
      id: new Date().getTime(),
      title,
      description: desc,
      status: false,
      date: +id,
    });
    setFlag(false);
  };

  const deleteTodo = (todoId) => {
    onDeleteItem(todoId);
  };

  const changeTodo = (todoId) => {
    onChangeItem(todoId);
  };

  return (
    <div className="todo-list">
      {flag && ReactDOM.createPortal(
        <CreateItemModal
          element={element}
          day={+id}
          setFlag={setFlag}
          addTodo={addTodo}
        />,
        portalEl,
      )}
      <Header
        titleVal={titleVal}
        setTitleVal={setTitleVal}
        searchBar
        todos={todos}
      />
      <div className="sub-header">
        <span>
          to-do list du to april
          {' '}
          {id}
          {' '}
          2020
        </span>
        <button className="btn" onClick={openModal}>Add a new to-do</button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>to-do item</th>
            <th>status</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {filteredByTitle.map((item) => (
            <TodoItem
              key={item.id}
              item={item}
              changeTodo={changeTodo}
              deleteTodo={deleteTodo}
            />
          ))}
        </tbody>

      </table>
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onAddItem: PropTypes.func.isRequired,
  onDeleteItem: PropTypes.func.isRequired,
  onChangeItem: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({ todos: state.todo });

const mapDispatchToProps = (dispatch) => ({
  onAddItem: (data) => dispatch(addItem(data)),
  onDeleteItem: (id) => dispatch(deleteItem(id)),
  onChangeItem: (id) => dispatch(changeItem(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
