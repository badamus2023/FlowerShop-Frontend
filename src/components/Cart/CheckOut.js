import classes from './CheckOut.module.css'

const CheckOut = ({onSubmit, inputData, onClose}) => {

  const handleSubmit = (event) => {
    event.preventDefault();

    const orderFormData = new FormData(event.target);
    const orderData = Object.fromEntries(orderFormData);

    onSubmit({ ...orderData });
  };

  return (
    <form
      className={classes.formContainer}
      id="order-form"
      onSubmit={handleSubmit}
    >
      <div className={classes.inputSections}>
        <label htmlFor="userName">Imie</label>
        <input type="text" id="userName" name="userName" defaultValue={inputData?.name ?? ''} />
      </div>
      <div className={classes.inputSections}>
        <label htmlFor="userStreet">Ulica</label>
        <input type="text" id="userStreet" name="userStreet" defaultValue={inputData?.name ?? ''} />
      </div>
      <div className={classes.inputSections}>
        <label htmlFor="userPostal">Kod pocztowy</label>
        <input type="text" id="userPostal" name="userPostal" defaultValue={inputData?.name ?? ''} />
      </div>
      <div className={classes.inputSections}>
        <label htmlFor="userCity">Miasto</label>
        <input type="text" id="userCity" name="userCity" defaultValue={inputData?.name ?? ''} />
      </div>
      <div className={classes.actionsSection}>
        <button onClick={onClose} type="button">Anuluj</button>
        <button type="submit">Zatwierdź</button>
      </div>
    </form>
  );
}

export default CheckOut;