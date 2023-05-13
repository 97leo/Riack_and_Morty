const validation = (userData) => {
   const errors = {};
if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.email)) {
    errors.email= "El dato ingresado no es un email";
}
if(!userData.email) {
    errors.email= "Este campo no debe estar vacío";
}
if(userData.email.length > 35) {
    errors.email = "No pueden haber más de 35 caracteres en este campo";
}
if(!/.*d+.*/.test(userData.password)) {
    errors.password= "La password debe tener al menos un número";
}
if(userData.password.length > 6 || userData.password.length < 10 ) {
    errors.password = "La password debe tener una longitud entre 6 y 10 caracteres";
}
return errors;
}
export default validation;