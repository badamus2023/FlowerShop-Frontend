import { Fragment } from 'react';
import classes from './Header.module.css'
import CartButton from '../components/Cart/CartButton';
import ProfileButton from '../components/Profile/ProfileButton';
import { useSelector } from 'react-redux';
import OrderButton from '../components/Orders/OrdersButton';

const Header = () => {

  const isAdmin = useSelector((state) => state.ui.isAdmin);

  return (
    <Fragment>
      <header className={classes.header}>
        <div className={classes.mainImg}>
          <img src='https://flowershop-backend-production.up.railway.app/images/mainImage.png' alt="flower" />
          <div className={classes.mainText}>
            <h2>Kwiaciarnia</h2>
            <h3>Bartosz Adamus</h3>
          </div>
        </div>
        <div className={classes.hmenu}>
            <ProfileButton/>
            {!isAdmin && <CartButton />}
            {isAdmin && <OrderButton/>}
        </div>
      </header>
      <div className={classes.hbot}>
        <div className={classes.hbotText}>
        <h6>Kontakt: 785 072 264</h6>
        <h6>Adres: Centralna 50B, 34-120 Sułkowice</h6>
        </div>
      </div>
    </Fragment>
  );
}

export default Header