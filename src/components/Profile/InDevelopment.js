import Modal from '../../UI/Modal'
import classes from './InDevelopment.module.css'
import { useDispatch } from 'react-redux';
import { uiActions } from '../../store/ui-slice';

const InDevelopment = (props) => {

    const dispatch = useDispatch();

    const userMode = () => {
        dispatch(uiActions.setIsAuthTrue());
        dispatch(uiActions.setIsAdminFalse());
    }

    const adminMode = () => {
        dispatch(uiActions.setIsAdminTrue());
        dispatch(uiActions.setIsAuthFalse());
    }

    const logout = () => {
        dispatch(uiActions.setIsAdminFalse());
        dispatch(uiActions.setIsAuthFalse());
    }

    return (
      <Modal onClose={props.onClose}>
        <div className={classes.inDevelopmentContainer}>
          <h1>Element w trakcie prac</h1>
          <h3>Możesz wybrać :</h3>
          <div className={classes.actions}>
            <button onClick={adminMode}>Admin Mode</button>
            <button onClick={userMode}>User Mode</button>
            <button onClick={logout}>Logout</button>
          </div>
        </div>
      </Modal>
    );
}

export default InDevelopment;