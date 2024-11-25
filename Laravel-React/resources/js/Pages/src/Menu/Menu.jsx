import React from 'react';
import './Menu.css';

const Menu = () => {
    const dishes = [
        { id: 1, name: 'ORDEN DE TACOS DE PESCADO CAPEADO', available: true, imgSrc: '/images/tacos1.jpg' },
        { id: 2, name: 'CÓCTEL DE CAMARÓN', available: true, imgSrc: '/images/coctelcama.jpg' },
        { id: 3, name: 'FILETE EMPANIZADO', available: true, imgSrc: '/images/Filete.jpeg' },
        { id: 4, name: 'MOLCAJETE', available: true, imgSrc: '/images/Molcajete.jpg' }, // Ejemplo de plato adicional
        // Agrega más platos según sea necesario
    ];


    const dishes2 = [
        { id: 1, name: 'Coca Cola', available: true, imgSrc: '/images/coca.jpeg' },
        { id: 2, name: 'Michelada', available: true, imgSrc: '/images/miche.jpg' },
        { id: 3, name: 'Jarra de agua', available: true, imgSrc: '/images/agua.jpg' },
        
    ];

    const dishes3 = [
        { id: 1, name: 'Buñuelos tiko’s', available: true, imgSrc: '/images/buñu.jpg' },
        { id: 2, name: 'Crepas de cajeta', available: true, imgSrc: '/images/crepa.jpeg' },
        { id: 3, name: 'Crepas souzette', available: true, imgSrc: '/images/crepa2.jpeg' },
        { id: 4, name: 'Duraznos con rompope', available: true, imgSrc: '/images/dura.jpg' },
        { id: 5, name: 'Duraznos con lechera', available: true, imgSrc: '/images/duras.jpeg' },
        
    ];

    return (
        <>
            <div>
                <h2 className="menu-title">Platillos</h2>
                <hr className="menu-divider" />
                <div className="dish-cards">
                    {dishes.map((dish) => (
                        <div key={dish.id} className="card">
                            <div className="image-container">
                                <img src={dish.imgSrc} alt={dish.name} />
                            </div>
                            <div className="card-content">
                                <h3>{dish.name}</h3>
                                <p>{dish.available ? 'Disponible' : 'No disponible'}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h2 className="menu-title">Bebidas</h2>
                <hr className="menu-divider" />
                <div className="dish-cards">
                    {dishes2.map((dish) => (
                        <div key={dish.id} className="card">
                            <div className="image-container">
                                <img src={dish.imgSrc} alt={dish.name} />
                            </div>
                            <div className="card-content">
                                <h3>{dish.name}</h3>
                                <p>{dish.available ? 'Disponible' : 'No disponible'}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h2 className="menu-title">Postres</h2>
                <hr className="menu-divider" />
                <div className="dish-cards">
                    {dishes3.map((dish) => (
                        <div key={dish.id} className="card">
                            <div className="image-container">
                                <img src={dish.imgSrc} alt={dish.name} />
                            </div>
                            <div className="card-content">
                                <h3>{dish.name}</h3>
                                <p>{dish.available ? 'Disponible' : 'No disponible'}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Menu;