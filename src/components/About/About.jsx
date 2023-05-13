import style from './About.module.css';
const About = () => {
return (
    <div>
        <h1>Leonel Javier Aguilera</h1>
        <p>
            Soy una persona pro-activa, apasionado por el aprendizaje, 
            dispuesto a enfrentar todo tipo de desafíos lógicos.
            Me inicie en el mundo de la programacón para llevar
            mis hábilidades al máximo y ponerme a prueba constantemente.
            Quiero destacar en esta profesión con disciplina, compromiso y predisposición. 
        </p>
        <img src="https://scontent.fmdz5-1.fna.fbcdn.net/v/t1.6435-9/89930534_10215876156520235_84797639563935744_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ykRf9aFmR2QAX8jxqMK&_nc_ht=scontent.fmdz5-1.fna&oh=00_AfDqxixUoCOgiYJBTGMiZ0RuaxpGuvm4oddKfW4vg4gQMA&oe=647D7F52" width="300px" className={style.img}/>
    </div>
)
}
export default About