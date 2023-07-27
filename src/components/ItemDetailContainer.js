import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    // Simulación de carga del detalle del producto desde una fuente de datos (podría ser una API o una base de datos).
    const fetchItemDetail = async () => {
      try {
        // Aquí realizas una llamada a una API o base de datos para obtener el detalle del producto con el id recibido en la URL.
        // Por simplicidad, en este ejemplo usaremos una función asincrónica que simula la carga del detalle del producto.
        const response = await fetch(`https://api.example.com/products/${id}`);
        const data = await response.json();
        setItem(data);
      } catch (error) {
        console.error('Error al cargar el detalle del producto:', error);
      }
    };

    fetchItemDetail();
  }, [id]);

  if (!item) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="item-detail-container">
      <h2>Detalles del producto con id: {item.id}</h2>
      <p>Nombre: {item.name}</p>
      <p>Descripción: {item.description}</p>
      <p>Precio: ${item.price}</p>
    </div>
  );
};

export default ItemDetailContainer;
