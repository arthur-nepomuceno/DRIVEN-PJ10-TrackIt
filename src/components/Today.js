import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import UserContext from "../contexts/UserContext";
import TodayHabit from "./TodayHabit";
import axios from "axios";
import dayjs from "dayjs";

export default function Today(){
    const API = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
    const {user} = useContext(UserContext);
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

    return(
        <Container>
            <p>dia, data</p>
            <p>mensagem inicial</p>
            <TodayHabit />
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
`