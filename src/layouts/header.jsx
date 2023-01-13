import React from "react";
import {useNavigate} from "react-router-dom"

const Header = (props) => {
    const navigate = useNavigate();
    return(
        <>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <div class="container-fluid">
                <button class="navbar-brand btn" onClick={()=>navigate("/")}>ACC</button>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto"> 
                    </ul>
                    <ul class="navbar-nav d-flex">
                        <li class="nav-item px-4">
                            <button class="nav-link btn btn-outline-secondary" onClick={()=>navigate("/home")} >Home</button>
                        </li>
                        <li class="nav-item px-4">
                            <button class="nav-link btn btn-outline-success" onClick={()=>navigate("/login")}>Login</button>
                        </li>
                        <li class="nav-item px-4">
                            <button class="nav-link btn btn-outline-primary" onClick={()=>navigate("/signup")}>Sign Up</button>
                        </li>
                    </ul>
                </div>
            </div>
            </nav>
        </>        
    );
};

export default Header;