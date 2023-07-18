import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Login/Login.js";
import Register from "../Register/Register";
function AllRoutes() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<h1>Home Page</h1>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
            </Routes>

        </BrowserRouter>

    );
}
export default AllRoutes;