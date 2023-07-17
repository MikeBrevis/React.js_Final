import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import './Navbar.css';
import Modal from './Modal/Modal';

const Navbar = () => {
  const { cart, setters, showModal, breath, phase } = useContext(dataContext);
  const cartModal = showModal && <Modal setters={setters} phase={phase} breath={breath} data={cart} showModal={setters.setShowModal} />;
  const breathClass = breath && 'breathing-class';

  const sumQuantity = cart.reduce((accumulator, element) => accumulator + element.quantity, 0);

  return (
    <div className="nav-container">
      <nav className="navbar">
        <h1 className="navbar-logo">Shop.</h1>
        <div className="cart-container">
          <p className="cart-p">{sumQuantity}</p>
          <div className={`seeCarrito ${breathClass}`} onClick={() => setters.setShowModal(true)}>🛒</div>
        </div>
      </nav>
      { cartModal }
    </div>
  )
};

Navbar.displayName = 'Navbar';

export default Navbar