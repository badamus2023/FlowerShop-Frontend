import Modal from "../../UI/Modal";
import OrdersItem from "./OrdersItem";
import classes from "./Orders.module.css"
import { useQuery } from "@tanstack/react-query";
import { fetchOrders } from "../../utils/http";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import LoadingIndicator from "../../UI/LoadingIndicator";
import ErrorBlock from "../../UI/ErrorBlock";



const Orders = () => {

    const dispatch = useDispatch()

    const hideModal = () => {
        dispatch(uiActions.setOrdersIsVisibleFalse())
    }

    const {data, isPending, isError, error} = useQuery({
        queryKey: ['orders'],
        queryFn: fetchOrders,
    })

    let content;

    if(isPending) {
        content = <LoadingIndicator/>
    }

    if(isError) {
        content = <ErrorBlock title='Failed to load orders' message={error.info?.message || 'Failed to load orders'}/>
    }

    if(data) {
        content = data.map((orders) => 
        <OrdersItem key={orders.id} order={orders}/>)
    }


    return (
        <Modal onClose={hideModal}>
            <div className={classes.orderC}>
                {content}
            </div>
        </Modal>
    );
}

export default Orders;