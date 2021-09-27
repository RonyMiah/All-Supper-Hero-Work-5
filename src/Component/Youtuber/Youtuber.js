import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee ,faUserTie,faAddressBook,faAngleDoubleDown} from '@fortawesome/free-solid-svg-icons'
import './Youtuber.css'

const Youtuber = (props) => {
    const {name, cost, image, country,address,email} = props.youtuber;

    const icon = <FontAwesomeIcon icon={faAddressBook} />
    const iconPeople = <FontAwesomeIcon icon={faUserTie} />
    return (
        <div className="card">
            <img src={image} alt="" />
            <h3> Name :  {name}</h3>
            <p>Country :{country}</p>
            <p><small>Address : {address}</small></p>
            <p><small>Email  {icon} : {email}</small></p>
            <p> Cost :{cost}</p>
            <button onClick={()=>props.handleAddToCart(props.youtuber)}> Hire Me  {iconPeople}</button>
        </div>
    );
};

export default Youtuber;