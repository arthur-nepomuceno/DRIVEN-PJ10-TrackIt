import styled from "styled-components";
import {ThreeDots} from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import trackit from "../img/trackIt-login-signup.png";

export default function Login(){

    const [email, setEmail] = useState("joao44@gmail.com");
    const [password, setPassword] = useState("legal ");
    const [user, setUser] = useState(null);

    const body = {
        email,
        password,
    }

    const navigate = useNavigate();

    function Send(event){
        event.preventDefault();

        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", body);
        if(promise){
            promise.then(response => {
                const data = response.data;
                setUser({...data});
                navigate("/hoje")
            });
            promise.catch((error) => {Error(error.response.data.message)});
        } else {
            Loading();
        }       
    }

    function Error(e){
        alert(e);
    }

    function Loading(){
        return <ThreeDots color="#00BFFF" height={80} width={80} />
    }

    return(
        <>
            <Image src={trackit}/>
            <Form onSubmit={Send}>
                <Input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                <Input type="password" placeholder="senha" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                <Button type="submit">Entrar</Button>
                <Link to="/cadastro" style={{textDecoration: "none"}}>
                    <P>Não tem uma conta? Cadastre-se!</P>
                </Link>
            </Form>
        </>
       
    );
}


const Image = styled.img`
    width: 180px;
    height: 180px;
    position: absolute;
    top: 68px;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 280px;
`

const Input = styled.input`
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

    &::placeholder{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #DBDBDB;
    }
`;

const Button = styled.button`
    width: 300px;
    height: 45px;
    background: #52B6FF;
    border-radius: 5px;
    border-style: none;
    margin: 3px 0px 25px 0px;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;
    color: #FFFFFF;

    &:hover{
        cursor: pointer;
    }
`;

const P = styled.p`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    text-decoration-line: underline;    
    color: #52B6FF;
`