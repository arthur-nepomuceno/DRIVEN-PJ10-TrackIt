import styled from "styled-components";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import Day from "./Day";
import Habit from "./Habit";
import UserContext from "../contexts/UserContext";

export default function Habits(){
    const API = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
    const {user, habits, setHabits} = useContext(UserContext)
    const token = user.token
    const config = {headers: {Authorization: `Bearer ${token}`}}
    useEffect(() => {
        const promise = axios.get(API, config);
        promise.then((response) => {setHabits(response.data)});
        promise.catch((error) => {alert(error.response.data.message)})
        
    }, []);

    const [newHabit, setNewHabit] = useState(false);
    const weekDays = [{day: `D`, number: 0},
                      {day: `S`, number: 1},
                      {day: `T`, number: 2},
                      {day: `Q`, number: 3},
                      {day: `Q`, number: 4},
                      {day: `S`, number: 5},
                      {day: `S`, number: 6}];

    function addHabit(){
        setNewHabit(true);
    }

    const [habitName, setHabitName] = useState("");
    const [habitDays, setHabitDays] = useState([]);
    function save(){
        const body = {name: habitName, days: habitDays}
        const config = {headers: {Authorization: `Bearer ${token}`}}
        const promise = axios.post(API, body, config);
        promise.then(setHabitName(""));
        promise.catch((error) => {alert(error.response.data.message)});
        setNewHabit(false);
    }

    function cancel(){
        setNewHabit(false);
    }

    return(
        <Container>
            <p id="title">Meus hábitos</p>
            <div id="new-habit" onClick={addHabit}>+</div> 
            {newHabit?
                        <div id="add-habit">
                            <input type="text" 
                                   placeholder="nome do hábito"
                                   value={habitName}
                                   onChange={(e) => {setHabitName(e.target.value)}}
                                   required/>
                            <div id="weekdays">
                                {weekDays.map((day, index) => <Day key={index}
                                                                   day={day.day}
                                                                   name={day.name}
                                                                   number={day.number}
                                                                   habitDays={habitDays}
                                                                   setHabitDays={setHabitDays}/>)}
                            </div>
                            <div id="options">
                                <p id="cancel" onClick={cancel}>Cancelar</p>
                                <p id="save" onClick={save}>Salvar</p>
                            </div>
                        </div>
                        : ""}
            {habits.length === 0 ? 
                                    <p id="message">
                                        Você não tem nenhum hábito cadastrado ainda. 
                                        Adicione um hábito para começar a trackear!
                                    </p> 
                                    : habits.map(
                                        (habit, index) => <Habit key={index}
                                                                 name={habit.name}
                                                                 days={habit.days}
                                                                 weekdays={weekDays}/>
                                    )}
        </Container>
    );
}

const Container = styled.div`
    width: 375px;
    height: 77%;
    padding: 0px 18px 0px 18px;
    background-color: #F2F2F2;
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 70px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;

    > p {
        font-size: 23px;
        line-height: 29px;
        margin-top: 28px;
        color: #126BA5;
    }

    p#message{
        font-size: 18px;
        line-height: 22px;
        color: #666666;
    }

    div#new-habit{
        width: 40px;
        height: 35px;
        border-radius: 5px;
        background: #52B6FF;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 22px;
        right: 18px;
        font-size: 27px;
        color: #FFFFFF;
    }

    div#new-habit:hover {
        cursor: pointer;
    }

    div#add-habit {
        width: 340px;
        height: 180px;
        margin-top: 20px;
        background: #FFFFFF;
        border-radius: 5px;
        padding: 18px;
    }

    div#add-habit input {
        width: 303px;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        padding: 10px;
        font-size: 20px;
        outline: none;
    }

    input::placeholder {
        font-size: 20px;
        color: #DBDBDB;
    }

    div#weekdays {
        width: fit-content;
        display: flex;
        margin-top: 8px;
    }

    div#options {
        display: flex;
        margin-top: 30px;
        justify-content: end;
        align-items: center;
    }

    p#cancel {
        margin-right: 24px;
        font-size: 16px;
        line-height: 20px;
        color: #52B6FF;

        &:hover {
            cursor: pointer;
        }
    }

    p#save {
        width: 84px;
        height: 35px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #52B6FF;
        border-radius: 5px;
        font-size: 16px;
        line-height: 20px;
        color: #FFFFFF;

        &:hover {
            cursor: pointer;
        }
    }

`