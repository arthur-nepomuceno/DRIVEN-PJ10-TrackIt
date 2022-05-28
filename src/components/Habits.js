import styled from "styled-components";
import { useState } from "react";

export default function Habits(){
    const [newHabit, setNewHabit] = useState(true);
    const [sunday, setSunday] = useState(true);
    const [monday, setMonday] = useState(false);
    const [tuesday, setTuesday] = useState(false);
    const [wednesday, setWednesday] = useState(false);
    const [thursday, setThursday] = useState(false);
    const [friday, setFriday] = useState(false);
    const [saturday, setSaturday] = useState(false);
    const weekDays = [{day: `D`, name: `sunday`},
                      {day: `S`, name: `monday`},
                      {day: `T`, name: `tuesday`},
                      {day: `Q`, name: `wednesday`},
                      {day: `Q`, name: `thursday`},
                      {day: `S`, name: `friday`},
                      {day: `S`, name: `saturday`}];

    function addHabit(){
        setNewHabit(true);
    }

    function cancel(){
        setNewHabit(false);
    }

    function save(){
        setNewHabit(false);
    }

    function selectDay(){}

    return(
        <Container>
            <p id="title">Meus hábitos</p>
            <div id="new-habit" onClick={addHabit}>+</div> 
            {newHabit?
                        <div id="add-habit">
                            <input type="text" placeholder="nome do hábito"/>
                            <div id="weekdays">
                                {weekDays.map((day, index) => <P key={index}>{day.day}</P>)}
                            </div>
                            <div id="options">
                                <p id="cancel" onClick={cancel}>Cancelar</p>
                                <p id="save" onClick={save}>Salvar</p>
                            </div>
                        </div>
                        : ""}
            <p id="message">Você não tem nenhum hábito cadastrado ainda. 
                Adicione um hábito para começar a trackear!</p>
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

    div#weekdays p{
        width: 30px;
        height: 30px;
        margin-right: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        font-size: 20px;
        line-height: 25px;
        

        &:hover {
            cursor: pointer;
        }
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

const P = styled.p`
    background: ${props => props.background};
    color: ${props => props.color};
`