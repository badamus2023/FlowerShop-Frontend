import classes from './FlowersSummary.module.css'
import { Fragment } from 'react';

const FlowersSummary = () => {
  return (
    <Fragment>
      <section className={classes.summary}>
        <h2>Świerze kwiaty, dostarczone do ciebie</h2>
        <p>
          Wybierz swój ulubiony bukiet z naszej bogatej kolekcji i delektuj się
          zachwycającym aromatem w zaciszu własnego domu.
        </p>
        <p>
          Wszystkie nasze bukiety są starannie ułożone ze świeżych, wysokiej
          jakości kwiatów, ręcznie wykonanych przez wykwalifikowanych
          kwiaciarzy, aby rozjaśnić Twój dzień!
        </p>
      </section>
      <div className={classes.offer}><h1>Nasza oferta</h1></div>
    </Fragment>
  );
}

export default FlowersSummary;