import React from 'react';
import Base from "./Base.jsx";
import {Link, useLocation} from "react-router-dom";

const AboutPage = () => {

    const location = useLocation();

    return (
        <Base>
            <h1 style={{textAlign: 'center'}}>
                {window.location.origin}
            </h1>

            <h1 style={{textAlign: 'center'}}>
                {location.pathname}
            </h1>

            <button onClick={() => window.location.reload()}>
                Reload
            </button>

            <Link to={'/'}>
                Home Page
            </Link>
        </Base>
    );
};

export default AboutPage;