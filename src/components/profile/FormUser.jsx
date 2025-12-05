import { useState } from "react";
import { Link } from "react-router";

export const FormUserProfile = () => {
  const [form, setForm] = useState({
    name: "Jhefferson Gonzales Prada",
    phone: "987654321",
    email: "jgonzales.22@gmail.com",
  });
  const [isEdit, setIsEdit] = useState(false);

  const handlerEdit = () => {
    setIsEdit(true);
  };

  const handlerSave = () => {
    setIsEdit(false)
  }

  return (
    <>
      <div className="info-base-profile">
        <div className="primary-txt">
          <span>Usuario</span>
          <span style={{ color: "black" }}>jgonzales</span>
        </div>
        <div className="primary-txt">
          <span>Contraseña</span>
          <span style={{ color: "black" }}>*********</span>
        </div>
      </div>
      <div className="form-profile">
        <label htmlFor="name">Nombre Completo</label>
        <input
          type="text"
          name="name"
          id="name"
          disabled={!isEdit}
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <label htmlFor="name">Teléfono</label>
        <input
          type="text"
          name="phone"
          id="phone"
          disabled={!isEdit}
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />

        <label htmlFor="name">Correo</label>
        <input
          type="email"
          name="email"
          id="email"
          disabled={!isEdit}
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
      </div>

      {!isEdit ? (
        <div className="btns-acctions">
          <input
            type="button"
            className="btn-edit-profile"
            onClick={handlerEdit}
            value={"Editar"}
          />
        </div>
      ) : (
        <div className="btns-acctions">
          <input
            type="button"
            className="btn-save-profile"
            onClick={handlerSave}
            value={"Guardar"}
          />
        </div>
      )}

      <div className="btns-acctions">
        <Link to="/login" type="submit" className="btn-logout">
          Cerrar Session
        </Link>
      </div>
    </>
  );
};
