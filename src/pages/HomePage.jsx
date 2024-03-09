import React from 'react';
import {useNavigate} from "react-router-dom";
import Base from "./Base.jsx";

const HomePage = () => {

    const navigate = useNavigate();

    return (
        <Base>
            Home Page
        </Base>
    );
};

export default HomePage;