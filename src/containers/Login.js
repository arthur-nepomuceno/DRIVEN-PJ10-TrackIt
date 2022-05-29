import styled from "styled-components";
import {ThreeDots} from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import UserContext from "../contexts/UserContext";
import axios from "axios";
import trackit from "../img/trackIt-login-signup.png";

export default function Login(){
    const API = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";
    const navigate = useNavigate();
    const {setUser} = useContext(UserContext);      
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nowLoading, setNowLoading] = useState(false);
    const serialData = localStorage.getItem(`data`);
    const data = JSON.parse(serialData);

    function AutoLogin(data){
        if(data){
            setNowLoading(true);
            const body = {email: data.email, password: data.password};
            const promise = axios.post(API, body);
            promise.then(response => {
                const info = response.data;
                setUser({...info});
                navigate("/hoje");
                setNowLoading(false);
            });
            promise.catch((error) => {
                alert(error.response.data.message);
                setNowLoading(false);
            });
            }
    };
    useEffect(() => {AutoLogin(data)}, []);    

    function Send(event){
        event.preventDefault(); 
        setNowLoading(true);
        const body = {email, password};
        const promise = axios.post(API, body);
        promise.then(response => {
            localStorage.setItem(`data`, JSON.stringify({email, password}));
            const info = response.data;
            setUser({...info});
            navigate("/hoje");
            setNowLoading(false);
        });
        promise.catch((error) => {
            alert(error.response.data.message);
            setNowLoading(false);
        });
    };

    return(
        <Container background={nowLoading ? `#D4D4D4` : `#FFFFF`} color={nowLoading ? `#AFAFAF` : `#000000`}>
            <img src={trackit} alt="TrackIt"/>
            <form onSubmit={Send}>
                <input type="email" 
                       placeholder="email" 
                       value={data? data.email : email} 
                       onChange={(e) => setEmail(e.target.value)} 
                       required/>
                <input type="password" 
                       placeholder="senha" 
                       value={data? data.password : password} 
                       onChange={(e) => setPassword(e.target.value)} 
                       required/>
                {nowLoading ? <div><ThreeDots color="#FFFFFF" height={50} width={50} /></div> 
                            : <button type="submit">Entrar</button>}
                <Link to="/cadastro" style={{textDecoration: "none"}}>
                    <p>Não tem uma conta? Cadastre-se!</p>
                </Link>
            </form>
        </Container>
       
    );
}

const Container = styled.div`
    position: absolute;
    top: 75px;
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

        background: ${props => props.background};
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        outline: none;

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: ${props => props.color};
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
`;

