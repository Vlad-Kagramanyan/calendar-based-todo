import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Header = ({
  titleVal, setTitleVal, searchBar, todos,
}) => {
  const notCompleted = todos.filter((todo) => !!todo.status);
  const description = `${todos.length} to-do items (${notCompleted.length} of which incomplete)`;
  return (
    <div className="header">
      <div className="description">
        <span>Header</span>
        <span>{description}</span>
      </div>
      {searchBar && (
      <div className="filter">
        <input type="text" className="filter__Input" value={titleVal} onChange={setTitleVal} />
      </div>
      )}
    </div>
  );
};

Header.propTypes = {
  titleVal: PropTypes.string,
  setTitleVal: PropTypes.func,
  searchBar: PropTypes.bool.isRequired,
  todos: PropTypes.array.isRequired,
};

Header.defaultProps = {
  titleVal: '',
  setTitleVal: () => {},
};

export default Header;
