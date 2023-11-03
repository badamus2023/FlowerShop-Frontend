//import { useDispatch } from "react-redux";
//import { uiActions } from "../../store/ui-slice";
import { Fragment } from "react";
import { useState } from "react";
import InDevelopment from "./InDevelopment";


const ProfileButton = (props) => {

   // const dispatch = useDispatch();

    const [isClicked, setIsClicked] = useState(false);

    const showLoginPanelHandler = () => {
        // dispatch(uiActions.showLoginPanel())
        setIsClicked(true);
    }

    const hideLoginPanelHandler = () => {
      setIsClicked(false);
    }

    return (
      <Fragment>
        {isClicked && <InDevelopment onClose={hideLoginPanelHandler}/>}
        <button onClick={showLoginPanelHandler}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#46366D"
            className="bi bi-person-fill"
            viewBox="0 0 16 16"
          >
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
          </svg>
        </button>
      </Fragment>
    );
}

export default ProfileButton;