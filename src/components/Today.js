import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import UserContext from "../contexts/UserContext";
import TodayHabit from "./TodayHabit";
import axios from "axios";
import dayjs from "dayjs";

export default function Today(){
    const API = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
    const {user, habits} = useContext(UserContext);
    const token = user.token;
    const config = {headers: {Authorization: `Bearer ${token}`}}
    const [todayHabits, setTodayHabits] = useState([]);
    useEffect(() => {
        const promise = axios.get(API, config);
        promise.then((response) => {
            console.log(response);
            const data = [...todayHabits, response.data];
            setTodayHabits(data);
        });
        promise.catch((error) => {alert(error.response.data.message)});
    }, []);


    const [percent, setPercent] = useState(0);
    const [count, setCount] = useState(0);
    return(
        <Container>
            <p>Domingo, 29/05</p>
            {percent > 0 ? <p style={{color: "#8FC549"}}>{percent}% dos hábitos concluídos</p> 
                         : <p>Nenhum hábito concluído ainda</p>}
            {habits.map((habit, index) => <TodayHabit key={index}
                                                      name={habit.name}
                                                      setPercent={setPercent}
                                                      count={count}
                                                      setCount={setCount}/>)}
        </Container>
    );
}

const Container = styled.div`
    width: 375px;
    height: 77%;
    padding: 0px 18px 50px 18px;
    background-color: #F2F2F2;
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 70px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none;
    }

    > p:first-child {
        font-size: 23px;
        line-height: 29px;
        margin-top: 28px;
        color: #126BA5;
    }

    > p:nth-child(2) {
        font-size: 17.976px;
        line-height: 22px;
        color: #BABABA;
    }
`