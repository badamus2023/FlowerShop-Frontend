import Card from "../../UI/Card";
import classes from "./FlowerItem.module.css"
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import Modal from "../../UI/Modal";
import { useState } from "react";
import EditFlower from "../AdminActions/EditFlower";
import DeleteFlower from "../AdminActions/DeleteFlower";
import { Fragment } from "react";

const FlowerItem = ({ flower }) => {
  const dispatch = useDispatch();

  const isAuth = useSelector((state) => state.ui.isAuth);
  const isAdmin = useSelector((state) => state.ui.isAdmin);

  const [isAuthModal, setIsAuthModal] = useState(false);

  const formattedPrice = parseFloat(flower.price).toFixed(2);

  const addToCartHandler = () => {
    if (isAuth === true) {
      dispatch(
        cartActions.addItemToCart({
          id: flower.id,
          name: flower.name,
          price: formattedPrice,
          imgSrc: flower.image,
        })
      );
    } else {
      setIsAuthModal(true);
    }
  };

  const hideModalHandler = () => {
    setIsAuthModal(false);
  };

  const content = (
    <Fragment>
    <EditFlower flower={flower}/>
    <DeleteFlower id={flower.id}/>
    </Fragment>
  )

  return (
    <Card>
      <div className={classes.itemContainer}>
        <img
          className={classes.flowerImg}
          src={`http://localhost:3000/${flower.image}`}
          alt={flower.name}
        />
        <div className={classes.title}>{flower.name}</div>
        <div className={classes.description}>{flower.description}</div>
        <div className={classes.price}> {formattedPrice} zł</div>
      </div>
      <div className={classes.addButton}>
        {!isAdmin && <button onClick={addToCartHandler}>Dodaj do koszyka</button>}
        {isAdmin && content}
        {isAuthModal && (
          <Modal onClose={hideModalHandler}>
            <div className={classes.noAuthModal}>
              <h5>Aby dodać produkt do koszyka musisz sie zalogować</h5>
            </div>
          </Modal>
        )}
      </div>
    </Card>
  );
}

export default FlowerItem;