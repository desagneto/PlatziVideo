import React from 'react';
import {Link} from 'react-router-dom';
import '../assets/styles/components/Register.css'

function Register() {

    const [form, setValues] = React.useState({
        email: '',
        name: '',
        password: ''
    });

    const handleInput = e =>{
      setValues({
          ...form,
          [e.target.name]:e.target.value,
      })
    };

    const handleSubmit = e =>{
        e.preventDefault();
        console.log(form);
    };

    return (
        <section className="register">
            <section className="register__container">
                <h2>Regístrate</h2>
                <form className="register__container--form" onSubmit={handleSubmit}>
                    <input
                        name="name"
                        className="input"
                        type="text"
                        placeholder="Nombre"
                        onChange={handleInput}
                    />
                    <input
                        name="email"
                        className="input"
                        type="text"
                        placeholder="Correo"
                        onChange={handleInput}
                    />
                    <input
                        name="password"
                        className="input"
                        type="password"
                        placeholder="Contraseña"
                        onChange={handleInput}
                    />
                    <button className="button">Registrarme</button>
                </form>
                <Link to="/login">
                    Iniciar sesión
                </Link>
            </section>
        </section>
    )

}

export default Register;
