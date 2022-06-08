import React from 'react'
import { useState } from 'react'

const ItemCount = () => {
    const [contador, setContador] = useState(0);
  const aumentarContador = (cantidad) => setContador(contador + cantidad);
  const disminuirContador = (cantidad) => {
    if (contador > 0) {
      setContador(contador - cantidad);
    }}
  return (
    <div className="d-inline-flex flex-column">
        <p className="text-center">Contador: {contador}</p>
        <div className="d-flex gap-2">
          <button onClick={() => aumentarContador(1)}>Aumentar</button>
          <button onClick={() => disminuirContador(1)}>Disminuir</button>
        </div>
      </div>
  )
}

export default ItemCount