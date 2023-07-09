import React from 'react';

const NavBar = () => {
  return (
    <nav>
      <div className="navbar-brand">Mi Tienda</div>
      <ul className="navbar-categories">
        <li><a href="#">Categoría 1</a></li>
        <li><a href="#">Categoría 2</a></li>
        <li><a href="#">Categoría 3</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
