import styled from "styled-components";
import {ThreeDots} from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import trackit from "../img/trackIt-login-signup.png";

export default function Login(){

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const body = {
        email,
        password,
    }

    const navigate = useNavigate();

    function Send(event){
        setIsLoading(true);
        
        event.preventDefault();

        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", body);
        promise.then(response => {
            const data = response.data;
            setUser({...data});
            navigate("/hoje")
        });
        promise.catch((error) => {alert(error.response.data.message)}); 
    };

    return(
        <Container>
            <img src={trackit} alt="TrackIt"/>
            <form onSubmit={Send}>
                <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                <input type="password" placeholder="senha" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                <button type="submit">Entrar</button>
                <Link to="/cadastro" style={{textDecoration: "none"}}>
                    <p>Não tem uma conta? Cadastre-se!</p>
                </Link>
            </form>
        </Container>
       
    );
}

const Container = styled.div`
    position: absolute;
    top: 68px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
        width: 180px;
        height: 180px;
        margin-bottom: 32px;       
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;    
    }

    input {
        width: 300px;
        height: 45px;
        margin: 3px 0px 3px 0px;
        padding: 10px;

        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        outline: none;

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px; 
    }

    input::placeholder {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #DBDBDB;
    }

    button {
        width: 300px;
        height: 45px;
        background: #52B6FF;
        border-radius: 5px;
        border-style: none;
        margin: 3px 0px 3px 0px;

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 26px;
        color: #FFFFFF;
    }

    button:hover {
        cursor: pointer;
    }

    p {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        text-decoration-line: underline;    
        color: #52B6FF;
        margin-top: 22px;
    }
`;

