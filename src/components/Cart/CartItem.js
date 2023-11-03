import classes from './CartItem.module.css'
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

const CartItem = (props) => {

    const dispatch = useDispatch()
    const {name, quantity, imgSrc, total, id, price} = props.item;

    const removeItemHandler = () => {
        dispatch(cartActions.removeItemFromCart(id))
    }


    const addItemHandler = () => {
        dispatch(cartActions.addItemToCart({
            id,
            name,
            price,
        }))
    }

    return (
    <li>
        <div className={classes.itemContainer}>
            <div className={classes.flowerImage}><img src={`http://localhost:3000/${imgSrc}`} alt={name}/></div>
                <div className={classes.flowerName}>{name}</div>
                <div className={classes.flowerPrice}>{total}zł</div>
                <div className={classes.flowerQuantity}>x{quantity}</div>
            <div className={classes.buttons}>
                <button onClick={removeItemHandler}>-</button>
                <button onClick={addItemHandler}>+</button>
            </div>
        </div>
    </li>
    );
};

export default CartItem;