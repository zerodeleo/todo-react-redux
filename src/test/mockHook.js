/* eslint-disable no-underscore-dangle */
const basicHookReducer = (newState, action) => (typeof action === 'function' ? action(newState) : newState);

const resolveDispatcher = (() => {
  let _state;

  const useState = initialState => {
    const state = _state || initialState;
    const setState = (newState, action) => {
      _state = basicHookReducer(newState, action);
    };
    return [state, setState];
  };

  const render = Component => {
    const fiber = Component();
    fiber.render();
    return fiber;
  };

  return {
    useState,
    render,
    // ...
  };
})();

const useState = initialState => {
  const dispatcher = resolveDispatcher;
  return dispatcher.useState(initialState);
};

export const mockRender = Component => {
  const dispatcher = resolveDispatcher;
  return dispatcher.render(Component);
};

export const mockComponent = () => {
  const [state, setState] = useState([]);
  return {
    render: () => state,
    dispatch: newState => setState(newState),
  };
};
