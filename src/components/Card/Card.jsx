// le integre el estado para que cuando se seleccione un item, se muestre en la factura, pero posteriormente no supe como hacer que se sumaran los precios de los items seleccionados
import React from 'react';

function Card({ item, type, onSelect, isSelected }) {
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
        <p>{item.estrellas} estrellas</p>
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
<div
    className={`card ${isSelected ? 'selected' : ''}`}
    onClick={onSelect}
>
    {renderContent()}
</div>
);
}

export default Card;

