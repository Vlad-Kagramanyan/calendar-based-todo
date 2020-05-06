import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import './style.scss';

const CalendarDay = ({ day, todoList }) => {
  const history = useHistory();
  const [showDescription, setShowDescription] = useState(false);
  const incompleted = todoList.filter((item) => !item.status);

  const show = (arg) => {
    setShowDescription(arg);
  };

  const gotoTodoList = () => {
    history.push(`item/${day}`);
  };

  return (
    <div
      className={`calendar-day ${todoList.length ? 'filed-day' : ''}`}
      onMouseOver={() => show(true)}
      onMouseLeave={() => show(false)}
      onClick={gotoTodoList}
    >
      <span>{day}</span>
      {showDescription && !!todoList.length && (
      <div className="description">
        {todoList.length}
        {' '}
        to-do in tems
        (
        {incompleted.length}
        {' '}
        of witch incomplete)
      </div>
      )}
    </div>
  );
};

CalendarDay.propTypes = {
  day: PropTypes.number.isRequired,
  todoList: PropTypes.array.isRequired,
};

export default CalendarDay;
