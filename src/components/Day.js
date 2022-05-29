import { useState, useEffect } from "react";
import styled from "styled-components";

export default function Day({day, number, habitDays, setHabitDays}){
    const [click, setClick] = useState(false);

    function isChosen(){
        if(habitDays.includes(number)){
            setClick(true);
        }
    }

    useEffect(isChosen, []);

    function selectDay(){
        if(click === false){
            setClick(true)
            const chosenDays = [...habitDays, number];
            setHabitDays(chosenDays); 
        }
        if(click === true){
            setClick(false);
            const chosenDays = habitDays.filter(d => d != number);
            setHabitDays(chosenDays);
        }        
    }

    return (
        <Container background={click ? `#CFCFCF` : `#FFFFFF`} 
                   color={click ? `#FFFFFF` : `#DBDBDB`}
                   onClick={selectDay}>
            <p>{day}</p>
        </Container>
    );
}

const Container = styled.div `
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
    
    background: ${props => props.background};
    color: ${props => props.color};

    &:hover {
        cursor: pointer;
    }

`