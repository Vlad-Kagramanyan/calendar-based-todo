/**
 * CreateReducer is a higher order function that generates reducer creator.
 * @param {Object} initialState - initial state of reducer.
 * @param {Object} ACTION_HANDLERS - object of action handlers.
 * @returns {function(Object, Object): Object} - function that returns corresponding handler.
 */
const createReducer = (initialState, ACTION_HANDLERS) => (
  (state = initialState, { type, payload }) => {
    const handler = ACTION_HANDLERS[type];
    return handler ? handler(state, payload) : state;
  }
);

export default createReducer;
