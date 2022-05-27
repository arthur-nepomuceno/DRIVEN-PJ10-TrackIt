import styled from "styled-components";
import { Link } from "react-router-dom";
import {CircularProgressbar} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"
import { useContext } from "react";
import UserContext from "../contexts/UserContext";

export default function BottomMenu(){
    const {progress} = useContext(UserContext);

    return(
        <Container>
            <Link to="/habitos" style={{textDecoration:"none"}}>
                <div>Hábitos</div>
            </Link>
            <Link to="/hoje" style={{textDecoration:"none"}}>
                 <div style={{width: 90, height: 130}}>
                     <CircularProgressbar value={progress}
                                          text={`Hoje`}
                                          background={true}
                                          backgroundPadding={6}
                                          strokeWidth={8}
                                          styles={{
                                              background: {
                                                  fill: `#52B6FF`,
                                              },
                                              text: {
                                                  fill: `#FFFFFF`,
                                              },
                                              path: {
                                                  stroke: `#FFFFFF`,
                                              },
                                              trail: {
                                                  stroke: `#52B6FF`,
                                              },
                                          }}/>
                </div>
            </Link>
            <Link to="/historico" style={{textDecoration:"none"}}>
                <div>Histórico</div>
            </Link>
        </Container>
    );
}

const Container = styled.div`
    width: 375px;
    height: 70px;
    background: #FFFFFF;
    position: fixed;
    bottom: 0;
    display: flex;   
    align-items: center;
    justify-content: space-between;
    padding: 24px 30px 24px 30px;
    z-index: 1;
    
    div {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #52B6FF;
    }
`