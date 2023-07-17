import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const dataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [breath, setBreath] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [phase, setPhase] = useState(1);

  const setters = {
    setData,
    setCart,
    setShowModal,
    setBreath,
    setPhase
  };

  useEffect(() => {
    axios("data.json").then((res) => {
      setData(res.data);
    })
  }, []);
  return <dataContext.Provider value={{ data, cart, breath, phase, showModal, setters }}>{children}</dataContext.Provider>;
};

export default DataProvider;
