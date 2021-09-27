import React from 'react';

const CartItem = (props) => {
    const {name, image} =props.clickedData;
    return (
        <div>
           <div className="overview">
            <img className="imgStyle cart-img" src={image} alt="" />
            <h4 className="nameStyle">{name}</h4>
           </div>
        </div>
    );
};

export default CartItem;