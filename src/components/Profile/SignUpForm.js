import classes from './SignUpForm.module.css'

const SignUpForm = (props) => {
    return (
    <form className={classes.formContainer}>
      <div className={classes.inputSections}>
        <label htmlFor='name'>Twój E-mail</label>
        <input type='text' id='name' />
      </div>
      <div className={classes.inputSections}>
        <label htmlFor='street'>Twoje Hasło</label>
        <input type='text' id='street' />
      </div>
      <div className={classes.inputSections}>
        <label htmlFor='postal'>Powtórz Hasło</label>
        <input type='text' id='postal' />
      </div>
      <div className={classes.actionsSection}>
        <button type='button' onClick={props.onClose}>
          Powrót
        </button>
        <button>Zarejestruj</button>
      </div>
    </form>
    );
}

export default SignUpForm;