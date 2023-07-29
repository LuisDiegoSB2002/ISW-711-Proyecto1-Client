import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Login/Login.js";
import Register from "../Register/Register";
import HomePage from "../HomePage/HomePage.js";
import Navbar from "../NavBar/NavBar.js";
import UserList from "../UserCRUD/ListUsers/UserList.js";
import CreateUser from "../UserCRUD/CreateUser/CreateUser.js";
function AllRoutes() {

    return (
        <BrowserRouter>
            <Routes>

                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/homePage" element={<HomePage />} />
                <Route path="/navBar" element={<Navbar />} />
                <Route path="/UserList" element={<UserList />} />
                <Route path="/CreateUser" element={<CreateUser />} />
                <Route path="/EditeUser" element={<CreateUser />} />
                <Route path="/DeleteUser" element={<CreateUser />} />

            </Routes>

        </BrowserRouter>

    );
}
export default AllRoutes;