import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Cards from './components/Cards/Cards.jsx';
import About from './components/About/About';
import Detail from './components/Deatil/Deatil';
import axios from 'axios';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';


function App() {

   const location = useLocation();
   const navigate = useNavigate();
   
   const email = 'leonel.aguilera.d@gmail.com';
   const password = 'Abc2345';

   const [access, setAccess] = useState(false);
   const [characters, setCharacters] = useState([]);

   useEffect(() => {
      !access && navigate('/');
   },[access])

   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }

      });
   }

   const onClose = (id) => {
      const charactersFiltered = characters.filter(character => id !== parseInt(character.id));
      setCharacters(charactersFiltered);
   }
   const login = (userData) => {
     if(email === userData.email && password === userData.password){
       setAccess(true);
       navigate('/home')
     }
   }

   return (

      <div className='App'>
        {
         location.pathname !== '/' &&   <Nav onSearch={onSearch}/>
        }
         <Routes>
            <Route path='/' element={<Form login={login}/>}/>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/favorites' element={<Favorites/>}/>
            
         </Routes>
      </div>
   );
}

export default App;
