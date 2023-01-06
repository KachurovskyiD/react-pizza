import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Categories = memo(({ items, onClickCategory, activeCategory }) => {
  return (
    <div className="categories">
      <ul>
        {items.map((name, index) => (
          <li
            className={classNames('categories__item', {
              active: activeCategory === index,
            })}
            onClick={() => onClickCategory(index)}
            key={name}
            tabIndex="0">
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
});

Categories.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
  onClickCategory: PropTypes.func,
  activeCategory: PropTypes.number,
};

export default Categories;
