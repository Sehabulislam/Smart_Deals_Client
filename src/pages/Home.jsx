import React from 'react';
import LatestProducts from '../components/products/LatestProducts';

const latestProducts = fetch('http://localhost:5000/latestProducts').then(res => res.json());

const Home = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='text-4xl text-center font-bold mb-5'>Latest <span className='bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent'>Product</span></h1>
            <LatestProducts latestProducts={latestProducts}></LatestProducts>
        </div>
    );
};

export default Home;