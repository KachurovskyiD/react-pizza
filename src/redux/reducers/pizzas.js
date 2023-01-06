const initialState = {
  items: [],
  isLoaded: false,
  error: false,
};

const pizzas = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PIZZAS':
      return {
        ...state,
        items: action.payload,
      };
    case 'SET_LOADED':
      return {
        ...state,
        isLoaded: action.payload,
      };
    case 'FETCH_PIZZAS_ERROR':
      return {
        ...state,
        isLoaded: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default pizzas;
