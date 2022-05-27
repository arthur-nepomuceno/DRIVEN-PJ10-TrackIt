import styled from "styled-components";

export default function History(){
    return(
        <Container>
            <p>Histórico</p>    
            <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
        </Container>
    );
}

const Container = styled.div`
    background-color: #F2F2F2;
    display: flex;
    flex-direction: column;
    width: 375px;
    height: 77%;
    position: fixed;
    top: 70px;
    padding: 0px 18px 0px 18px;


    p {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 23px;
        line-height: 29px;
        color: #126BA5;
        position: absolute;
    }

    p:first-child{
        top: 28px;
    }

    p:nth-child(2){
        top: 74px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #666666;
    }

`