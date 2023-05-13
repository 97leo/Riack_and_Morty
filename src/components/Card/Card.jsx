import style from './Card.module.css';
import { useState, useEffect } from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import {addFav, removeFav} from '../../redux/actions.js';

const Card = ({name, status, species, gender, origin, image,onClose,id,addFav,removeFav,myFavorites}) => {

   const [isFav, setIsFav] = useState(false);

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   const handleFavorite = () => {
      if(isFav) {
         setIsFav(false);
         removeFav(id)
      }else{
         setIsFav(true);
         addFav({id,name, status, species, gender, origin, image,onClose})
      }
   }
   return (
   
          <div className={style.card}>
                
                   <img className={style.imgCard} src={image} alt=''/>
                   <button onClick={()=> onClose(id)} className={style.cardBut}>X</button>
                   <div className={style.descrip}>
                   <div className={style.nick}>
                   <button onClick={handleFavorite} className={style.cardFav}>{isFav ? '❤️' : '🤍'}</button>
                   <NavLink to= {`/detail/${id}`}><h2 className={style.name}>{name}</h2></NavLink> 

                     <h2>{status}</h2>
                     <h2 >{species}</h2>
                     <h2 >{gender}</h2>
                     <h2 >{origin}</h2>
                     <button onClick={handleFavorite} className={style.cardFav}>{isFav ? '❤️' : '🤍'}</button>
                     
                  </div>
                  </div>
                  </div>
        
      
   );
}
   
const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}
const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => {dispatch(addFav(character))},
      removeFav: (id) => {dispatch(removeFav(id))}
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps,
)(Card)
