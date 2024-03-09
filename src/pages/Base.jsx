import React from 'react';
import {useNavigate} from "react-router-dom";

const Base = ({children}) => {

    const navigate = useNavigate();

    return (
        <main>
            <nav className={'base__div'}>
                <button onClick={() => navigate('/')}>Home</button>
                <button onClick={() => navigate('/about')}>About</button>
                <button onClick={() => navigate('/projects')}>Projects</button>
                <button onClick={() => navigate('/services')}>Services</button>
            </nav>

            <div>
                {children}
            </div>
        </main>
    );
};

export default Base;