import styled from "styled-components";
import trackit from "../img/TrackIt.png"
import { useContext } from "react";
import UserContext from "../contexts/UserContext";

export default function Top(){
    const {user} = useContext(UserContext);
    /*const {image} = user;*/

    return(
        <Container>
            <img src={trackit} alt="trackit"/>
            <img src={"https://http.cat/411.jpg"} alt="profile"/>
        </Container>
    );
}

const Container = styled.div`
    width: 375px;
    height: 70px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        margin: 0px 18px 0px 18px;
    }

    img:nth-child(2) {
        width: 51px;
        height: 51px;
        border-radius: 50%;
    }
`