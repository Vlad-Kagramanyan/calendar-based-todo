import { useState } from 'react';

const useInput = (propValue = '') => {
  const [value, setValue] = useState(propValue);

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  return [value, handleInput, setValue];
};

export default useInput;
