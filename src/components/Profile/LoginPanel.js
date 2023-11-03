import Modal from "../../UI/Modal";
import classes from "./LoginPanel.module.css"
import { Fragment, useState } from "react";
import SignUpForm from "./SignUpForm";

const LoginPanel = (props) => {

    const [isSignUpClicked, setIsSignUpClicked] = useState(false);

    const signUpShowHandler = () => {
      setIsSignUpClicked(true);
    }

    const signUpHideHandler = () => {
      setIsSignUpClicked(false);
    }

    const loginPanel = (
      <Fragment>
      <div className={classes.loginPanelContainer}>
          <h3>Login</h3>
          <input></input>
          <h3>Hasło</h3>
          <input></input>
        </div>
        <div className={classes.loginButtons}>
            <button>Zaloguj</button>
            <button onClick={signUpShowHandler}>Zarejestruj</button>
        </div>
        </Fragment>
    )

    return (
      <Modal onClose={props.onClose}>
        {!isSignUpClicked && loginPanel}
        {isSignUpClicked && <SignUpForm onClose={signUpHideHandler}/>}
      </Modal>
    );
}

export default LoginPanel;