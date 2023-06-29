import React from 'react';

const SaleProducts = ({product}) => {
    return (
        <div className="card card-side bg-base-100 shadow-xl flex-col lg:flex-row">
            <figure><img src={product.image} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{product.name}</h2>
                <p>Click the button to watch on Jetflix app.</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Watch</button>
                </div>
            </div>
        </div>
    );
};

export default SaleProducts;