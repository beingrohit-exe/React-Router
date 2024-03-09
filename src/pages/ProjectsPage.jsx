import React from 'react';
import Base from "./Base.jsx";
import {useNavigate, useSearchParams} from "react-router-dom";

const ProjectsPage = () => {

    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    return (
        <Base>
            <button onClick={()=> setSearchParams("rohit")}>
                Profile
            </button>
        </Base>
    );
};

export default ProjectsPage;