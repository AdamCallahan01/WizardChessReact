import React from "react";
import './Button.css';
import {Link} from 'react-router-dom';

export const Button = ({
    children,
    type,
    onClick,
}) => {

    return (
        <Link to='/game' className="btn-mobile">
            <button className="button"
            onClick={onClick} type={type}>
                {children}
            </button>


        </Link>
    )
};