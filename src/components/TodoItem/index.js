import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const TodoItem = ({ item, changeTodo, deleteTodo }) => (
  <>
    <tr>
      <td className="description">
        <h3 className="title">{item.title}</h3>
        <span>{item.description}</span>
      </td>
      <td className="status">{item.status ? 'complete' : 'incomplete'}</td>
      <td>
        <p
          className="delete"
          onClick={() => deleteTodo(item.id)}
        >
          delete
        </p>
        {!item.status
          && (
          <p
            className="mark-done"
            onClick={() => changeTodo(item.id)}
          >
            mark as done
          </p>
          )}
      </td>
    </tr>
  </>
);

TodoItem.propTypes = {
  item: PropTypes.object.isRequired,
  changeTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default TodoItem;
