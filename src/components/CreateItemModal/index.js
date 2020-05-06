import React, { useState } from 'react';
import PropTypes, { object } from 'prop-types';
import useInput from '../../hooks/useInput';
import './style.scss';

const CreateItemModal = ({
  element, day, setFlag, addTodo,
}) => {
  const [errMsg, setErrMsg] = useState('');
  const [titleVal, setTitleVal] = useInput('');
  const [descVal, setDescVal] = useInput('');

  const onCancel = () => {
    setFlag(false);
  };

  const onAdd = () => {
    if (titleVal.length && descVal.length) {
      addTodo({ title: titleVal, desc: descVal });
      return;
    }
    setErrMsg('All fields should be filled');
  };

  return (
    <div className="modal-wrapper">
      <div className="modal" ref={element}>
        <h3 className="title-desc">
          add a new to-do item due april
          {day}
          {' '}
          2020
        </h3>
        <div className="input-group">
          <input
            type="text"
            placeholder="title"
            className="input-title"
            onChange={setTitleVal}
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="description"
            className="input-description"
            onChange={setDescVal}
          />
        </div>
        {errMsg && <span className="error">{errMsg}</span>}
        <div className="btn-group">
          <button className="btn-add" onClick={onAdd}>add</button>
          <button className="btn-cancel" onClick={onCancel}>cancel</button>
        </div>
      </div>
    </div>
  );
};

CreateItemModal.propTypes = {
  element: PropTypes.object,
  day: PropTypes.number.isRequired,
  setFlag: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired,
};

CreateItemModal.defaultProps = {
  element: null,
};

export default CreateItemModal;
