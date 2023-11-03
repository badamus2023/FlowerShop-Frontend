import classes from './CartButton.module.css'
import { uiActions } from '../../store/ui-slice';
import { useDispatch, useSelector } from 'react-redux';
import { Fragment } from 'react';

const CartButton = (props) => {
  const dispatch = useDispatch();
  
  const cartQuantity = useSelector(state => state.cart.totalQuantity);
  const isAuth = useSelector((state) => state.ui.isAuth)

  const showModal = () => {
    dispatch(uiActions.showCart());
  };

  return (
    <Fragment>
      <div className={classes.cartButton}>
        <button onClick={showModal}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#46366D"
            className="bi bi-basket-fill"
            viewBox="0 0 16 16"
          >
            <path d="M5.071 1.243a.5.5 0 0 1 .858.514L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 6h1.717L5.07 1.243zM3.5 10.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3z" />
          </svg>
        </button>
        {isAuth && <h5>{cartQuantity}</h5>}
      </div>
    </Fragment>
  );
}

export default CartButton;