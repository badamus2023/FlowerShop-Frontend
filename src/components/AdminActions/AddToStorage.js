import { Fragment } from "react";
import Card from "../../UI/Card"
import classes from './AddToStorage.module.css'
import FlowerForm from "./FlowerForm";
import Modal from "../../UI/Modal";
import { useMutation } from "@tanstack/react-query";
import { addNewFlower, queryClient } from "../../utils/http";
import { useState } from "react";
import LoadingIndicator from "../../UI/LoadingIndicator";
import ErrorBlock from "../../UI/ErrorBlock";

const AddToStorage = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  const showAddFlowerModal = () => {
    setIsClicked(true);
  };

  const hideAddFlowerModal = () => {
    setIsClicked(false);
  };

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: addNewFlower,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["flowers"] });
    },
  });

  const handleSubmit = (formData) => {
    mutate({ flower: formData });
  };

  const addToStorageButton = (
    <div className={classes.addToStorage}>
      <button onClick={showAddFlowerModal}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          fill="#46366D"
          className="bi bi-file-plus"
          viewBox="0 0 16 16"
        >
          <path d="M8.5 6a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V10a.5.5 0 0 0 1 0V8.5H10a.5.5 0 0 0 0-1H8.5V6z" />
          <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
        </svg>
      </button>
    </div>
  );

  return (
    <Fragment>
      {isClicked && (
        <Modal onClose={hideAddFlowerModal}>
          {!isPending && !isError && (
            <FlowerForm onClose={hideAddFlowerModal} onSubmit={handleSubmit} />
          )}
          {isPending && <div className={classes.loading}><LoadingIndicator /></div>}
          {isError && (
            <ErrorBlock
              title="Couldnt add new flower"
              message={error.info?.message || "Couldnt add new flower"}
            />
          )}
        </Modal>
      )}
      <Card>{addToStorageButton}</Card>
    </Fragment>
  );
}

export default AddToStorage;