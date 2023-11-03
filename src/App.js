import { Fragment } from "react";
import Header from "./UI/Header";
import AviableFlowers from "./components/Flowers/AviableFlowers";
import Cart from "./components/Cart/Cart";
import { useSelector, useDispatch } from "react-redux";
import { QueryClientProvider} from "@tanstack/react-query";
import { queryClient } from "./utils/http";
import { uiActions } from "./store/ui-slice";
import LoginPanel from "./components/Profile/LoginPanel";
import Orders from "./components/Orders/Orders";

function App() {

  const dispatch = useDispatch();
  const showCart = useSelector(state => state.ui.cartIsVisible);
  const showLoginPanel = useSelector(state => state.ui.loginPanelIsVisible);
  const isOrdersVisible = useSelector(state => state.ui.ordersIsVisible)

  const hideCartHandler = () => {
    dispatch(uiActions.hideCart())
  }

  const hideLoginPanel = () => {
    dispatch(uiActions.hideLoginPanel())
  }

  return (
    <QueryClientProvider client={queryClient}>
    <Fragment>
      {isOrdersVisible && <Orders/>}
      {showCart && <Cart onClose={hideCartHandler}/>}
      {showLoginPanel && <LoginPanel onClose={hideLoginPanel}/>}
      <Header />
      <main>
        <AviableFlowers/>
      </main>
    </Fragment>
    </QueryClientProvider>
  );
}

export default App;
