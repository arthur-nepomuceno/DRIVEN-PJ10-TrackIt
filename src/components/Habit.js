import styled from "styled-components";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";

export default function Habit({id, name, weekdays, days}){
    const {habits, setHabits} = useContext(UserContext);

    function deleteHabit(){
        if(confirm(`Deseja realmente apagar este hábito? ${name}`) === true){
            const newList = habits.filter(habit => habit.id != id);
            setHabits(newList);
        }
    };

    const list = [1, 3, 6];
    return(
        <Container>
            <p>
                {name}
                <div onClick={deleteHabit}>
                    <ion-icon name="trash-bin-outline" ></ion-icon>
                </div>
            </p>
            <div id="weekdays">
                {weekdays.map((day, index) => <div key={index} 
                                                   id="day"
                                                   style={{background: `${days.includes(day.number) ? "#CFCFCF" : "#FFFFFF"}`,
                                                           color: `${days.includes(day.number) ? "#FFFFFF" : "#DBDBDB"}`}
                                                         }>{day.day}</div>)}
            </div>
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

    div#weekdays {
        width: fit-content;
        display: flex;
        margin-top: 8px;
    }

    div#day {
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
    }
`