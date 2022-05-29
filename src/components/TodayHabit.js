import styled from "styled-components";
import checkbox from "../img/check.png";
import { useContext, useState } from "react";
import UserContext from "../contexts/UserContext";

export default function TodayHabit({name, count, setCount, setPercent}){
    const {habits} = useContext(UserContext);
    const [check, setCheck] = useState(false);
    const total = (habits.length);

    function checkHabit(){
        if(check === false){
            setCheck(true);
            setCount(count = count + 1);
            setPercent(Math.round((count / total) * 100));
            console.log(count);
        } else if(check === true){
            setCheck(false);
            setCount(count = count - 1);
            setPercent(Math.round((count / total) * 100));
            console.log(count);
        }
    };

    return(
        <Container background={check ? "#8FC549" : "#EBEBEB"}>
            <div>
                <p>{name}</p>
                <p>Sequência atual: -sequência-</p>
                <p>Seu recorde: -recorde-</p>
            </div>
            <div id="checkbox" onClick={checkHabit}>
                <img src={checkbox} alt="checkbox"/>
            </div>
        </Container>
    );
}

const Container = styled.div`
    width: 340px;
    height: 90px;
    padding: 14px;
    margin-top: 20px;
    background: #FFFFFF;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    color: #666666;

    p:first-child {
        font-size: 20px;
        margin-bottom: 7px;
    }

    p:nth-child(2){
        font-size: 13px;
        line-height: 16px;
    }

    p:nth-child(3){
        font-size: 13px;
        line-height: 16px;
    }

    div#checkbox {
        width: 70px;
        height: 70px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: ${props => props.background};
        border: 1px solid #E7E7E7;
        border-radius: 5px;

        &:hover {
            cursor: pointer;
        }
    }
`