import React from 'react';

function Card({ item, type }) {
function renderContent() {
switch (type) {
    case 'alimentacion':
    return (
        <>
        <img src={item.imagen} alt={item.titulo} />
        <h3>{item.titulo}</h3>
        <p>${item.precio}</p>
        </>
    );
    case 'hoteles':
    return (
        <>
        <img src={item.imagen} alt={item.nombre} />
        <h3>{item.nombre}</h3>
        <p>${item.costo}</p>
        <p>{item.ubicacion}</p>
        <ul>
            {item.servicios.map((service) => (
            <li key={service}>{service}</li>
            ))}
        </ul>
        </>
    );
    case 'destinosdla':
    return (
        <>
        <img src={item.imagen} alt={item.nombre} />
        <h3>{item.nombre}</h3>
        <p>${item.precio}</p>
        </>
    );
    default:
    return null;
}
}

return (
<div className="card">
    {renderContent()}
</div>
);
}

export default Card;
