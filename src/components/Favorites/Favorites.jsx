import { connect } from "react-redux";
import {useDispatch} from "react-redux";
import { useState } from "react";
import {filterCards, orderCards} from '../../redux/actions';
import Card from "../Card/Card";
import style from './Favorites.module.css';

const Favorites = ({myFavorites}) => {
    
    const dispatch = useDispatch();
    const [aux, setAux] = useState(false);

    const handleOrder = (event) => {
      dispatch(orderCards(event.target.value));
      setAux(true);
    }
    const handleFilter = (event) => {
      dispatch(filterCards(event.target.value));
    }
    return (
        <div className= {style.favP}>
            <select onChange={handleOrder}>
                <option value='A'>Ascendente</option>
                <option value= 'D'>Descendente</option>
            </select>
            <select onChange={handleFilter}>
                <option value= 'Male'> Male</option>
                <option value= 'Female'>Female</option>
                <option value= 'Genderless'>Genderless</option>
                <option value= 'unknown'>Unknown</option>
            </select>
        <div className= {style.favP}>
          {
            myFavorites?.map( ({id,name, status, species, gender, origin, image}) => {
                return (
                    <Card
                    key={id}
                    id={id}
                    name={name}
                    status={status}
                    species={species}
                    gender={gender}
                    origin={origin.name}
                    image={image}
                    />
                )
            })
          }
          </div>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(
    mapStateToProps,
    null
)(Favorites)