import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {
  const { id } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Simulación de carga de productos desde una fuente de datos (podría ser una API o una base de datos).
    const fetchItems = async () => {
      try {
        // Aquí realizas una llamada a una API o base de datos para obtener los productos de la categoría con el id recibido en la URL.
        // Por simplicidad, en este ejemplo usaremos una función asincrónica que simula la carga de productos.
        const response = await fetch(`https://api.example.com/products?category=${id}`);
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error('Error al cargar los productos:', error);
      }
    };

    fetchItems();
  }, [id]);

  return (
    <div className="item-list-container">
      <p>{greeting}</p>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <a href={`/item/${item.id}`}>{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemListContainer;

