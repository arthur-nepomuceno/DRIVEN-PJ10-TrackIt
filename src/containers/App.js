import "../styles/reset.css"
import "../styles/style.css"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import Top from "../components/Top";
import BottomMenu from "../components/BottomMenu";
import Habits from "../components/Habits";
import Today from "../components/Today";
import History from "../components/History";
import UserContext from "../contexts/UserContext";


export default function App(){
    const [user, setUser] = useState(null);
    const userData = {user, setUser}

    return(
        <BrowserRouter>
            <UserContext.Provider value={userData}>
                <Routes>
                        <Route path="/" element={<Login/>}/>
                        <Route path="/cadastro" element={<SignUp/>}/>
                        <Route path="/hoje" element={<><Top/><Today/><BottomMenu/></>}/>
                        <Route path="/habitos" element={<><Top/><Habits/><BottomMenu/></>}/>
                        <Route path="/historico" element={<><Top/><History/><BottomMenu/></>}/>
                </Routes>
            </UserContext.Provider>
        </BrowserRouter>
    );
}