import React, { use } from 'react';
import ProductCard from '../products/ProductCard';

const LatestProducts = ({latestProducts}) => {
    const products = use(latestProducts);
    // console.log(products);
    return (
        <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-5'>
            {
                products.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
            }
        </div>
    );
};

export default LatestProducts;