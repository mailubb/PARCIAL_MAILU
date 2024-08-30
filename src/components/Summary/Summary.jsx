//aqui estaba intentando hacer el resumen de la factura, pero no me salio, no se como hacerlo en el app.js

import React from 'react';

function Summary({ selectedItems, calculateTotal }) {
return (
<div className="invoice">
    <h2>Factura</h2>
    <ul>
    {Object.entries(selectedItems).map(([type, item]) => (
        item ? (
        <li key={type}>
            {item.nombre || item.titulo}: ${item.precio || item.costo}
        </li>
        ) : null
    ))}
    </ul>
    <p>Total: ${calculateTotal()}</p>
</div>
);
}

export default Summary;
