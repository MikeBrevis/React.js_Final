import { useState, useEffect } from "react";
import './Modal.css';

const Modal = ({ data, showModal, breath, phase, setters }) => {
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    email: "",
    confirmEmail: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const handleInputChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const cartProducts = data.map((cartData) => (
    <div className="detail-product" key={cartData.id}>
      <p>Producto: {cartData.name}</p>
      <p>Cantidad: {cartData.quantity}</p>
      <p>Precio unitario: ${cartData.price.toFixed(2)}</p>
      <p>Precio total: ${cartData.total.toFixed(2)}</p>
    </div>
  ));

  const total = data.reduce((accumulator, producto) => accumulator + producto.total, 0);

  const isFormComplete = () => {
    return (
      form.nombre !== "" &&
      form.apellido !== "" &&
      form.telefono !== "" &&
      form.email !== "" &&
      form.confirmEmail !== ""
    );
  };

  useEffect(() => {
    setIsFormValid(isFormComplete());
  }, [isFormComplete]);

  const isAnyProduct = data.length ? (
    cartProducts
  ) : (
    <div>
      <p>{'Aun no hay productos en tu carro :('}</p>
    </div>
  );

  const success = () => {
    setters.setPhase(3);
    setTimeout(() => {
      window.location.reload();
    }, 6000);
  }

  return (
    <div className="modal-container">
      <div onClick={() => showModal(false)} className="close-button">
        X
      </div>
      {phase === 1 &&
        <div>
          {isAnyProduct}
        </div>
      }
      {phase === 2 &&
        <div>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="apellido"
            placeholder="Apellido"
            onChange={handleInputChange}
          />
          <input
            type="tel"
            name="telefono"
            placeholder="Telefono"
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="confirmEmail"
            placeholder="Confirma tu e-mail"
            onChange={handleInputChange}
          />
        </div>}
      {data.length > 0 && phase === 1 && (
        <div>
          <p>Total ${total}</p>
        </div>
      )}
      {phase === 1 && data.length > 0 && <button onClick={() => setters.setPhase(2)}>Ir a pagar</button>}
      {phase === 2 &&
        <div>
          <button onClick={success} disabled={!isFormValid || !breath}>Realizar Compra</button>
        </div>}
      {
        phase === 3 &&
        <div>
          <p>{'Muchas gracias por tu compra :)'}</p>
          <p>{'Recibiras un correo en los proximos minutos con tu boleta'}</p>
          <p>{'Esta ventana se cerrara en breve'}</p>
        </div>
      }
    </div>
  );
};

export default Modal;
