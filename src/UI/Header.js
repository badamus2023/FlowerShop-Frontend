import { Fragment } from 'react';
import classes from './Header.module.css'
import mainImage from '../assets/image-from-rawpixel-id-2613482-original.png'
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
          <img src={mainImage} alt="flower" />
          <div>
            <h2>Kwiaciarnia</h2>
            <h3>Renata Białoń</h3>
          </div>
        </div>
        <div className={classes.hmenu}>
            <ProfileButton/>
            {!isAdmin && <CartButton />}
            {isAdmin && <OrderButton/>}
        </div>
      </header>
      <div className={classes.hbot}>
        <h6>Kontakt: 785 072 264</h6>
        <h6>Adres: Beskidzka 34, 34-120 Andrychów</h6>
      </div>
    </Fragment>
  );
}

export default Header