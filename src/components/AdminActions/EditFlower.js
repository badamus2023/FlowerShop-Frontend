import { Fragment } from "react";
import FlowerForm from "./FlowerForm";
import Modal from "../../UI/Modal";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { queryClient, updateFlower } from "../../utils/http";
import LoadingIndicator from "../../UI/LoadingIndicator";
import ErrorBlock from "../../UI/ErrorBlock";


const EditFlower = ({flower}) => {
  const [isClicked, setIsClicked] = useState(false);

  const showEditModal = () => {
    setIsClicked(true);
  };

  const hideEditModal = () => {
    setIsClicked(false);
  };

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: updateFlower,
    onSuccess: () => {
      queryClient.invalidateQueries(["flowers"]);
    },
  });

  const handleSubmit = (formData) => {
    mutate({ id: flower.id, flower: formData });
  };

  return (
    <Fragment>
      {isClicked && (
        <Modal onClose={hideEditModal}>
          {!isPending && !isError && (
            <FlowerForm
              onClose={hideEditModal}
              onSubmit={handleSubmit}
              inputData={flower}
            />
          )}
          {isPending && (
            <div>
              <LoadingIndicator />
            </div>
          )}
          {isError && (
            <ErrorBlock
              title="Couldnt save changes"
              message={error.info?.message || "Couldnt save changes"}
            />
          )}
        </Modal>
      )}
      <button onClick={showEditModal}>Edytuj</button>
    </Fragment>
  );
}

export default EditFlower;