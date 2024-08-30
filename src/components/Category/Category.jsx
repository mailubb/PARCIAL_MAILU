import React from 'react';
import Card from '../Card/Card';

function Category({ items, type, className, onSelect, selectedItem }) {
return (
<div className={`category ${className}`}>
    {items.map((item) => (
    <Card
        key={item.titulo || item.nombre}
        item={item}
        type={type}
        onSelect={() => onSelect(item)}
        isSelected={selectedItem === item}
    />
    ))}
</div>
);
}

export default Category;




