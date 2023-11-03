import { Fragment } from 'react';
import classes from './OrdersSection.module.css'

const OrdersSection = ({orderItems}) => {
    return (
        <Fragment>
        {Object.keys(orderItems).map(key => {
            const item = orderItems[key];
            return (
              <li className={classes.itemC} key={key}>
                <p>{item.quantity} x</p>
                <p>{item.name}</p>
                <p>{item.price} zł</p>
              </li>
            );
          })}
        </Fragment>
    );
}

export default OrdersSection;