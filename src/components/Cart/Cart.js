import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMutation } from "@tanstack/react-query";
import Modal from "../../UI/Modal";
import CartItem from "./CartItem";
import CheckOut from "./CheckOut";
import { addNewOrder, queryClient } from "../../utils/http";
import { cartActions } from "../../store/cart-slice";
import LoadingIndicator from "../../UI/LoadingIndicator";
import ErrorBlock from "../../UI/ErrorBlock";
import classes from './Cart.module.css';

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  const sumPrice = useSelector((state) => state.cart.sumPrice);
  const isAuth = useSelector((state) => state.ui.isAuth);
  const dispatch = useDispatch();
  const [isCheckOut, setIsCheckOut] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const showCheckOut = () => {
    setIsCheckOut(true);
  };

  const hideCheckOut = () => {
    setIsCheckOut(false);
  };

  const isCartEmpty = cartItems.length === 0;

  const orderCartData = cartItems.map((item) => ({
    name: item.name,
    quantity: item.quantity,
    price: item.price
  }));

  const cartItem = (
    <Fragment>
      <ul>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              name: item.name,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price,
              imgSrc: item.imgSrc,
            }}
          />
        ))}
      </ul>
      <div className={classes.cartFooter}>
        <div>
          <p>Łączna kwota: {sumPrice} zł</p>
        </div>
        <div>
          <button onClick={showCheckOut}>Zamawiam</button>
          <button onClick={props.onClose}>Anuluj</button>
        </div>
      </div>
    </Fragment>
  );

  const emptyCartModule = (
    <div className={classes.emptyCart}>
      <h5>Koszyk jest pusty</h5>
      <h6>Wybierz produkt z oferty</h6>
    </div>
  );

  const notAuth = (
    <div className={classes.emptyCart}>
      <h5>Aby zobaczyć swój koszyk musisz się zalogować</h5>
    </div>
  );

  const successOrder = (
    <div className={classes.emptyCart}>
      <h5>Twoje zamówienie zostało złożone pomyślnie!</h5>
    </div>
  );

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: addNewOrder,
    onSuccess: () => {
      queryClient.invalidateQueries(['orders']);
      dispatch(cartActions.reset());
      setIsSuccess(true);
    },
  });

  const handleSubmit = (orderData) => {
    mutate({ orderLocation: orderData, orderItems: orderCartData });
  };

  return (
    <Modal onClose={props.onClose}>
      {!isCheckOut && !isCartEmpty && <h3 className={classes.cart}>Twój Koszyk</h3>}
      {isSuccess && successOrder}
      {isAuth && isCartEmpty && !isSuccess && emptyCartModule}
      {!isCartEmpty && !isCheckOut && cartItem}
      {!isAuth && notAuth}
      {isCheckOut && !isPending && !isError && !isSuccess && (
        <CheckOut onSubmit={handleSubmit} onClose={hideCheckOut} />
      )}
      {isPending && (
        <div className={classes.loading}>
          <LoadingIndicator />
        </div>
      )}
      {isError && (
        <ErrorBlock
          title="Couldnt send your order"
          message={error.info?.message || 'Couldnt send your order'}
        />
      )}
    </Modal>
  );
};

export default Cart;