import style from './Form.module.css'
import {useState} from 'react';
import validation from '../../validation';

const Form = ({login}) => {

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }
    return (
        <form className={style.Contain} onSubmit={handleSubmit} >
           <label name = 'email'>Email: </label>
           <input name = 'email' value={userData.email} onChange={handleChange} placeholder='Escriba su email...' type='text'/> 
            {
                errors.email && <p className={style.valid}>{errors.email}</p>
            }
           <br></br>
           <label name = 'password'>Password: </label>
           <input name = 'password' value={userData.password} onChange={handleChange} placeholder='Escriba su password' type='password'/>
            {
                errors.password && <p className={style.valid}>{errors.password}</p>
            }
           <br></br>
           <button>Submit</button>
        </form>
    )
}
export default Form