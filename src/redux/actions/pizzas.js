import axios from 'axios';

export const fetchPizzas = (category, sortBy) => (dispatch) => {
  dispatch(setLoaded(false));

  axios(
    `https://62d03ee71cc14f8c08876112.mockapi.io//pizzas?${
      category > 0 ? `category=${category}` : ''
    }&_sort=${sortBy}&_order=asc`
  )
    .then(({ data }) => {
      dispatch(setPizzas(data));
      dispatch(setLoaded(true));
    })
    .catch((err) => {
      alert(`Виникла помилка: ${err.message}`);
      dispatch(fetchPizzasError(true));
    });
};

export const setLoaded = (payload) => {
  return {
    type: 'SET_LOADED',
    payload,
  };
};

export const fetchPizzasError = (payload) => {
  return {
    type: 'FETCH_PIZZAS_ERROR',
    payload,
  };
};

export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items,
});
