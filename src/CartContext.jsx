import { createContext, useState } from "react";

export const contexto = createContext();
const Provider = contexto.Provider;

export const CustomProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([])
  const [cantidadTotal, setCantidadTotal] = useState([0])
  const [precioFinal, setPrecioFinal] = useState([0])
  
  const addItem = (producto, cantidad) => {
    setCarrito(carrito => [...carrito, producto, cantidad])
  }

  const removeItem = (itemId) => {
    setCarrito(carrito => carrito.filter(x => x !== itemId))
  } 

  const clear = () => {
    setCarrito(carrito => [...carrito, []])
  }
  

  const valorDelContexto = {
    carrito: carrito,
    precio_final: precioFinal,
    cantidad_total: cantidadTotal,
    agregar_producto: addItem,
    eliminar_producto: removeItem,
    vaciar_carrito: clear,
  };

  return <Provider value={valorDelContexto}>
            {children}
         </Provider>;
};
