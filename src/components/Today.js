import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import UserContext from "../contexts/UserContext";
import TodayHabit from "./TodayHabit";
import axios from "axios";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import "dayjs/locale/pt-br";

export default function Today(){
    dayjs.extend(advancedFormat);
    dayjs.locale("pt-br");
    const date = dayjs().format(`dddd, DD/MM`).replace("-feira", "");
    const Date = date[0].toUpperCase() + date.slice(1);
    const {user, todayHabits, setTodayHabits, progress, setProgress} = useContext(UserContext);
    const [count, setCount] = useState(null);

    const API = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
    const token = user.token;
    const config = {headers: {Authorization: `Bearer ${token}`}}    
    useEffect(() => {
        const promise = axios.get(API, config);
        promise.then((response) => {
            setTodayHabits(response.data);
            const doneHabits = response.data.filter(habit => habit.done === true);
            const totalCount = response.data.length;
            const initialCount = doneHabits.length;
            const initialProgress = Math.round((initialCount / totalCount) * 100);
            setProgress(initialProgress);
            setCount(initialCount);
        });
        promise.catch((error) => {alert(error.response.data.message)});
    }, []);    
    
    return(
        <Container>
            <p>{Date}</p>
            {progress > 0 ? <p style={{color: "#8FC549"}}>{progress}% dos hábitos concluídos</p> 
                         : <p>Nenhum hábito concluído ainda</p>}
            {todayHabits.map((habit, index) => <TodayHabit key={index}
                                                      id={habit.id}
                                                      name={habit.name}
                                                      done={habit.done}
                                                      currentSequence={habit.currentSequence}
                                                      highestSequence={habit.highestSequence}
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