import { useMutation } from "@tanstack/react-query";
import { deleteFlower, queryClient } from "../../utils/http";
import { Fragment, useState } from "react";
import LoadingIndicator from "../../UI/LoadingIndicator";
import ErrorBlock from "../../UI/ErrorBlock";
import Modal from '../../UI/Modal'
import classes from './DeleteFlower.module.css'

const DeleteFlower = (props) => {
  const [isDelete, setIsDelete] = useState();

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: deleteFlower,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["flowers"] });
    },
  });

  const deleteFlowerHandler = () => {
    mutate({ id: props.id });
  };

  const startDelete = () => {
    setIsDelete(true);
  };

  const stopDelete = () => {
    setIsDelete(false);
  };

  let content;

  content = (
    <Fragment>
      <div className={classes.delete}>
        <h3>Czy na pewno chcesz usunąć ?</h3>
        <div className={classes.actions}>
          <button onClick={deleteFlowerHandler}>Tak</button>
          <button onClick={stopDelete}>Nie</button>
        </div>
      </div>
    </Fragment>
  );

  if (isPending) {
    content = <div className={classes.loading}><LoadingIndicator /></div>;
  }
  if (isError) {
    content = <ErrorBlock title='Couldnt delete the flower' message={error.info?.message || 'Couldnt delete the flower'}/>
  }

  return (
    <Fragment>
      {isDelete && (
        <Modal onClose={stopDelete}>
          {content}
        </Modal>
      )}
      <button onClick={startDelete}>Usuń</button>
    </Fragment>
  );
}

export default DeleteFlower;
