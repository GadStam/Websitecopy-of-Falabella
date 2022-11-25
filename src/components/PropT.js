import {shape, string, number, array} from 'prop-types';

export const ProductosType = shape({
    id: number.isRequired,
    title: string.isRequired,
    description: string.isRequired,
    price: number.isRequired,
    discountPercentage: number.isRequired,
    stock: number.isRequired,
    brand: string.isRequired,
    thumbnail: string.isRequired,
    images: array.isRequired
});

