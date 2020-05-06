import React, { useRef, useEffect, useState } from 'react';

const useClickOutside = (cb) => {
  const element = useRef(null);
  const [flag, setFlag] = useState(false);

  const handleClickOutside = (e) => {
    if (!element.current) return;
    if (!element.current.contains(e.target)) {
      setFlag(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return [element, flag, setFlag];
};

export default useClickOutside;
