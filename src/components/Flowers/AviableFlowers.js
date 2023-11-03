import { useQuery } from '@tanstack/react-query';
import { fetchFlowers } from '../../utils/http';

import { Fragment } from "react";
import classes from './AviableFlowers.module.css'
import FlowersSummary from "./FlowersSummary";
import FlowerItem from "./FlowerItem";
import AddToStorage from "../AdminActions/AddToStorage";
import { useSelector } from "react-redux";
import LoadingIndicator from '../../UI/LoadingIndicator';
import ErrorBlock from '../../UI/ErrorBlock';


const AviableFlowers = (props) => {

    let content;

    const { data, isPending, isError, error } = useQuery({
      queryKey: ['flowers'],
      queryFn: fetchFlowers,
    });


    if(isPending) {
      content = 
      <div className={classes.loading}>
      <LoadingIndicator/>
      </div>
    }

    if(isError) {
      content = 
      <div className={classes.loading}>
      <ErrorBlock title='Failed to load flowers' message={error.info?.message || 'Failed to load flowers'}/>
      </div>
    }

    if(data) {
    content = data.map((flower) => 
    <FlowerItem key={flower.id} flower={ flower }/>)
    }

    const isAdmin = useSelector((state) => state.ui.isAdmin)

    return (
      <Fragment>
        <FlowersSummary />
        <div className={classes.pContainer}>
          {content}
          {isAdmin && <AddToStorage/>}
        </div>
      </Fragment>
    );
}

export default AviableFlowers;