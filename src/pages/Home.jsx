import { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Categories, Sort, PizzaBlock, PizzaLoadingBlock } from '../components';

import { fetchPizzas } from '../redux/actions/pizzas';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { addPizzaToCart } from '../redux/actions/cart';

const categoriesNames = ['Всі', "М'ясні", 'Вегетаріанські', 'Гриль', 'Гострі'];
const sortNames = [
  { name: 'популярності', type: 'rating' },
  { name: 'ціні', type: 'price' },
  { name: 'назві', type: 'name' },
];

function Home() {
  const dispatch = useDispatch();
  const { items, isLoaded } = useSelector(({ pizzas }) => pizzas);
  const { category, sortBy } = useSelector(({ filters }) => filters);
  const cartItems = useSelector(({ cart }) => cart.items);

  useEffect(() => {
    dispatch(fetchPizzas(category, sortBy));
    // eslint-disable-next-line
  }, [category, sortBy]);

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index));
    // eslint-disable-next-line
  }, []);

  const onSelectSortType = useCallback((obj) => {
    dispatch(setSortBy(obj.type));
    // eslint-disable-next-line
  }, []);

  const handleAddPizzaToCart = useCallback((obj) => {
    dispatch(addPizzaToCart(obj));
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="filters">
        <div className="container">
          <div className="filters__wrapper">
            <Categories
              items={categoriesNames}
              onClickCategory={onSelectCategory}
              activeCategory={category}
            />
            <Sort items={sortNames} onClickSortType={onSelectSortType} activeSortType={sortBy} />
          </div>
        </div>
      </div>
      <section className="content">
        <div className="container">
          <h2 className="content__title">Всі піцци</h2>
          <div className="content__items">
            {isLoaded
              ? items.map((item) => (
                <PizzaBlock
                  onClickAddPizza={(obj) => handleAddPizzaToCart(obj)}
                  key={item.id}
                  addedCount={cartItems[item.id] && cartItems[item.id].items.length}
                  {...item}
                />
              ))
              : Array(10)
                .fill(0)
                .map((_, index) => <PizzaLoadingBlock key={index} />)}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
