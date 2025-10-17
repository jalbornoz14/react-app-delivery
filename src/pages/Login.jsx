import { LogoChaskys } from '../components/LogoChaskys'


export const Login = () => {
  return (
    <>
      <LogoChaskys descripcion={'Delivery app'}/>
      <section className="inputs-form">
        <input type="text" name="user" id="user" placeholder="Usuario" />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Contraseña"
        />
      </section>
      <section className="accion-login">
        <span>¿Olvidaste tu contraseña?</span>
        <button className="btn btn-login">Iniciar Sesión</button>
        <span>o</span>
        <button className="btn btn-create-account">Crea una cuenta</button>
      </section>
    </>
  );
};
