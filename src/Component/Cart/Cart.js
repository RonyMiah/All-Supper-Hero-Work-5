import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown,faAward} from '@fortawesome/free-solid-svg-icons'
import CartItem from '../CartItemShow/CartItem';

const icon = <FontAwesomeIcon icon={faAngleDoubleDown} />
const iconAward = <FontAwesomeIcon icon={faAward} />

const Cart = (props) => {

    const { cart } = props;

    let total = 0;

    for(let price of cart){
        total += price.cost;
    }

    return (
        <div>
            <h3> Selected Person : {icon}
               <br />
               {iconAward} 
            </h3>
            <h3>Cart Amount: <span className="price">{props.cart.length}</span></h3>
            <h3>Cost: <span className="price">${total}</span></h3>
            <div style={{"margin": "70px 0 0 0"}}>
                {
                     props.cart.map(eachBlog =><CartItem
                        key={eachBlog.id + Math.random()}
                        clickedData={eachBlog}
                        ></CartItem>)
                }
            </div>
        </div>
    );
    
};

export default Cart;