import styled from "styled-components";

export default function Habit({id, name, weekdays, days}){

    const list = [1, 3, 6];
    return(
        <Container>
            <p>{name}</p>
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