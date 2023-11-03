import classes from './ErrorBlock.module.css'

const ErrorBlock = ({title, message}) => {
  return (
    <div className={classes.errorBlock}>
      <div className="error-block-text">
        <h2>{title}</h2>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default ErrorBlock;