import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown,faAward} from '@fortawesome/free-solid-svg-icons'
import Youtuber from '../Youtuber/Youtuber';
import './Card.css'
import Cart from '../Cart/Cart';
const Card = () => {


    const [youtubers , setYoutubers] =useState([]);
    const [cart, setCart] = useState([]);


    useEffect( ()=>{
            fetch('./fakedata.json')
            .then(res => res.json())
            .then(data => setYoutubers(data));
    },[])

    const handleAddToCart = (user) =>{
         const newCart = [...cart, user]
        setCart(newCart);
        console.log(newCart)
        return user;
    }

    

    return (
        <div className="main-container">
            <div className="card-container">
                <div className="card-design">
                    {
                        youtubers.map((youtuber) => {
                            return(
                                <Youtuber youtuber={youtuber} key={youtuber.cost} handleAddToCart={handleAddToCart}></Youtuber>
                            )
                        })
                    }
                </div>
               
                
            </div>

            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Card;