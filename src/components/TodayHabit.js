import styled from "styled-components";
import checkbox from "../img/check.png";
import { useContext, useState } from "react";
import UserContext from "../contexts/UserContext";
import axios from "axios";

export default function TodayHabit({id, name, done, currentSequence, highestSequence, count, setCount}){
    const checkAPI = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`;
    const uncheckAPI = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`
    const {user, todayHabits, setProgress} = useContext(UserContext);
    const [sequence, setSequence] = useState(currentSequence);
    const [record, setRecord] = useState(highestSequence);
    const total = (todayHabits.length);
    const token = user.token;

    const [check, setCheck] = useState(false);
    function checkHabit(){
        const body = {};
        const config = {headers: {Authorization: `Bearer ${token}`}}        
        if(check === false){
            const promise = axios.post(checkAPI, body, config);
            promise.then(() => {
                setCheck(true);
                setCount(count = count + 1);
                setProgress(Math.round((count / total) * 100));
                if(record === sequence){
                    setRecord(record + 1);
                }
                setSequence(sequence + 1);
            });
            promise.catch((error) => {
                alert(error.response.data.message);
            })
        } else if(check === true){
            const promise = axios.post(uncheckAPI, body, config);
            promise.then(() => {
                setCheck(false);
                setCount(count = count - 1);
                setProgress(Math.round((count / total) * 100));
                if(record === sequence){
                    setRecord(record - 1);
                }
                setSequence(sequence - 1);
            });
            promise.catch((error) => {
                alert(error.response.data.message);
            })
        } 
    };

    return(
        <Container background={check || done ? "#8FC549" : "#EBEBEB"}>
            <div>
                <p>{name}</p>
                <p>Sequência atual:
                    <span style={{color: `${check || done ? "#8FC549": "#666666"}`}}>
                        {" " + sequence} 
                        {sequence === 1 ? " dia" : " dias"}
                    </span>
                </p>
                <p>Seu recorde: 
                    <span style={{color: `${(check || done) && sequence === record ? "#8FC549": "#666666"}`}}>
                        {" " + record} 
                        {record === 1 ? " dia" : " dias"}    
                    </span>
                </p>
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