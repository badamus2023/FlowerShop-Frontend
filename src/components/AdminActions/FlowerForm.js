import classes from './FlowerForm.module.css'
import { Fragment } from 'react';

const FlowerForm = ({ inputData, onSubmit, onClose }) => {

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    onSubmit({ ...data });
  };

  return (
    <Fragment>
    <form
      className={classes.formContainer}
      id="flower-form"
      onSubmit={handleSubmit}
    >
      <div className={classes.inputSections}>
        <label htmlFor="name">Nazwa produktu</label>
        <input type="text" id="name" name="name" defaultValue={inputData?.name ?? ''} />
      </div>
      <div className={classes.inputSections}>
        <label htmlFor="description">Opis produktu</label>
        <input type="text" id="description" name="description" defaultValue={inputData?.description ?? ''} />
      </div>
      <div className={classes.inputSections}>
        <label htmlFor="price">Cena</label>
        <input type="text" id="price" name="price" defaultValue={inputData?.price ?? ''} />
      </div>
      <div className={classes.inputSections}>
        <label htmlFor="image">Dodaj zdjecie</label>
        <input type="text" id="image" name="image" defaultValue={inputData?.image ?? 'Work in progress'}/>
      </div>
      <div className={classes.actionsSection}>
        <button type="button" onClick={onClose}>
          Anuluj
        </button>
        <button type="submit">Zapisz</button>
      </div>
    </form>
    </Fragment>
  );
}

export default FlowerForm;