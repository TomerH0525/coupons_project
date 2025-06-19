import { Routes, Route } from "react-router";
import Home from "../../HomePage/Home";
import LoginPage from "../../AuthenticationPages/LoginPage";


function Routing(){

    return(
        <>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </>

    )
}

export default Routing