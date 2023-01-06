import { memo, useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import classNames from 'classnames';

import sortArrow from '../../assets/img/arrow-top.svg';

const Sort = memo(({ items, onClickSortType, activeSortType }) => {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const sortRef = useRef(null);
  const activeLabel = items.find((obj) => obj.type === activeSortType).name;

  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
  }, []);

  const onSelectItem = (obj) => {
    onClickSortType(obj);
    setVisiblePopup(false);
  };

  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  };

  const handleOutsideClick = (event) => {
    if (!event.path.includes(sortRef.current)) {
      setVisiblePopup(false);
    }
  };

  return (
    <div className="sort" ref={sortRef}>
      <div className="sort__label">
        <img
          className={classNames('sort__arrow', {
            active: visiblePopup,
          })}
          src={sortArrow}
          alt="Arrow."
        />
        <b>Сортування по:</b>
        <span onClick={toggleVisiblePopup}>{activeLabel}</span>
      </div>
      <CSSTransition in={visiblePopup} timeout={200} classNames="sort-animation" unmountOnExit>
        <div className="sort__popup">
          <ul>
            {items.map((obj) => (
              <li
                className={classNames('sort__popup-item', {
                  active: activeSortType === obj.type,
                })}
                onClick={() => onSelectItem(obj)}
                key={obj.type}>
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      </CSSTransition>
    </div>
  );
});

Sort.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  onClickSortType: PropTypes.func,
  activeSortType: PropTypes.string,
};

export default Sort;
