import { Grid, GridItem } from 'components';
import { Link } from 'react-router-dom';
import { routes } from "routes";


export const CountryList = ({ countries }) => {
  return (<Grid>
    {countries?.map(({id, flag, country}) => <GridItem key ={id}>
      <Link to={`{routes.COUNTRY}`}>
        <img src={flag} />
        <h2>{ country}</h2>
      </Link>
    </GridItem>)}
  </Grid>)
};
