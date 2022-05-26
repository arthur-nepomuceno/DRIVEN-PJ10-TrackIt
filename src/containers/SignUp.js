import styled from "styled-components";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {ThreeDots} from "react-loader-spinner";
import axios from "axios";
import trackit from "../img/trackIt-login-signup.png";

export default function SignUp(){

    const [email, setEmail] = useState("joao41@gmail.com");
    const [password, setPassword] = useState("legal ");
    const [name, setName] = useState("Joao");
    const [image, setImage] = useState("https://http.cat/411.jpg");
    const [nowLoading, setNowLoading] = useState(false);

    const body = {
        email,
        name,
        image,
        password
    }

    const navigate = useNavigate();

    function Send(event){
        event.preventDefault();
        setNowLoading(true);

        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up" ,body);
        promise.then(() => {
            navigate("/");
            setNowLoading(false);
        });
        promise.catch((error) => {
            Error(error.response.data.message);
            setNowLoading(false);
        });
    }

    function Error(e){
        alert(e);
    }

    return(
        <Container background={nowLoading ? `#D4D4D4` : `#FFFFF`} color={nowLoading ? `#AFAFAF` : `#000000`} >     
            <img src={trackit} alt="TrackIt"/>
            <form onSubmit={Send}>
                <input type="email" 
                       placeholder="email" 
                       value={email} 
                       onChange={(e) => setEmail(e.target.value)} 
                       required/>
                <input type="password" 
                       placeholder="senha" 
                       value={password} 
                       onChange={(e) => setPassword(e.target.value)} 
                       required/>
                <input type="text" 
                       placeholder="nome" 
                       value={name} 
                       onChange={(e) => setName(e.target.value)} 
                       required/>
                <input type="url" 
                       placeholder="foto" 
                       value={image} 
                       onChange={(e) => setImage(e.target.value)} 
                       required/>
                {nowLoading ? <div><ThreeDots color="#FFFFFF" height={50} width={50} /></div> 
                            : <button type="submit">Cadastrar</button>}
                <Link to="/" style={{textDecoration: "none"}}>
                    <p>Já tem uma conta? Faça login!</p>            
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

    input{
        width: 300px;
        height: 45px;
        margin: 3px 0px 3px 0px;
        padding: 10px;

        background: ${props => props.background};
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        outline: none;

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        color: ${props => props.color};
    }  

    input::placeholder {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        color: #DBDBDB;
    }

    button {
        width: 303px;
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

    div {
        width: 303px;
        height: 45px;
        background: #87cbfa;
        border-radius: 5px;
        border-style: none;
        margin: 3px 0px 3px 0px;
        display: flex;
        align-items: center;
        justify-content: center;
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
`
