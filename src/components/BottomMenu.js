import styled from "styled-components";
import { Link } from "react-router-dom";
import {CircularProgressbar} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"

export default function BottomMenu(){
    return(
        <Container>
            <ul>
                <Link to="/habitos" style={{textDecoration:"none"}}>
                    <li>Hábitos</li>
                </Link>
                <Link to="/hoje" style={{textDecoration:"none"}}>
                    <li><div><CircularProgressbar text={`Hoje`}/></div></li>
                </Link>
                <Link to="/historico" style={{textDecoration:"none"}}>
                    <li>Histórico</li>
                </Link>
            </ul>
        </Container>
    );
}

const Container = styled.div`
    width: 375px;
    height: 70px;
    background: #FFFFFF;
    position: fixed;
    bottom: 0;

    border: 1px dashed black;

    ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    li {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #52B6FF;
    }

    li div{
        width: 91px;
        height: 91px;
    }
`