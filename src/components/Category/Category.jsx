import React from 'react';
import Card from '../Card/Card';

const Category = ({ items, type }) => {
return (
<div className="category">
    {items.map((item) => (
    <Card
        key={item.titulo || item.nombre}
        item={item}
        type={type}
    />
    ))}
</div>
);
};

export default Category;



