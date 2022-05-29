import styled from "styled-components";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";

export default function TodayHabit({}){
    
    return(
        <Container>
            teste
        </Container>
    );
}

const Container = styled.div`
    width: 340px;
    height: 90px;
    background: #FFFFFF;
    border-radius: 5px;
    padding: 14px;
    margin-top: 20px;
    border: 1px dashed black;
    p {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        color: #666666;
        display: flex;
        justify-content: space-between;
    }

    ion-icon:hover {
        cursor: pointer;
    }


`