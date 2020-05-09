import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Header from '../Header';
import CalendarDay from '../CalendarDay';
import { generateDays } from '../../constants';
import './style.scss';

const arr = generateDays();

export const Calendar = ({ todos }) => (
  <>
    <Header searchBar={false} todos={todos} />
    <div className="calendar">
      <div className="title">
        April 2020
      </div>
      <div className="days">
        {arr.map((item) => {
          const currentList = todos.filter((todo) => todo.date === item.day);
          return <CalendarDay key={item.id} day={item.day} todoList={currentList} />;
        })}
      </div>
    </div>
  </>
);

Calendar.propTypes = {
  todos: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({ todos: state.todo });

export default connect(mapStateToProps)(Calendar);
