import Card from '../Card/Card.jsx';
import style from'./Cards.module.css';

 const Cards =({characters, onClose}) => {
   return (
      <div className={style.multicard} >
         <div/>
        { 
         characters.map(({name,status,species,gender,origin,image,id}) => {
            return (
            <div className={style.image} >
               <Card 
               key = {id}
               id =  {id}
               name = {name}
               status = {status}
               species = {species}
               gender = {gender}
               origin = {origin.name}
               image = {image}
               onClose={onClose}
               />
            <div/>
         </div>
               
            )
         })
        }
      </div>
   ) 
}
export default Cards
