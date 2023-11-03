import classes from './OrdersItem.module.css'
import OrdersSection from './OrdersSection';

const OrdersItem = ({order}) => {

  return (
    <div className={classes.cardO}>
      <div>
        <p>Id zamowienia: {order.id}</p>
        <p>Imie: {order.userName}</p>
        <p>Ulica: {order.userStreet}</p>
        <p>Kod pocztowy: {order.userPostal} </p>
        <p>Miasto: {order.userCity}</p>
      </div>
      <div>
        <p>Produkty:</p>
        <ul>
         <OrdersSection orderItems={order.orderItems}/>
        </ul>
      </div>
    </div>
  );
}

export default OrdersItem;