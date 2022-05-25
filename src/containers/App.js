import "../styles/reset.css"
import "../styles/style.css"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import Today from "./Today";


export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/cadastro" element={<SignUp/>}/>
                <Route path="/hoje" element={<Today/>}/>
            </Routes>
        </BrowserRouter>
    );
}