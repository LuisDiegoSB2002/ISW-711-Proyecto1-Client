import { BrowserRouter, Routes, Route ,useParams } from "react-router-dom";
import Login from "../Login/Login.js";
import Register from "../Register/Register";
import HomePage from "../HomePage/HomePage.js";
import Navbar from "../NavBar/NavBar.js";
import UserList from "../UserCRUD/ListUsers/UserList.js";
import CreateUser from "../UserCRUD/CreateUser/CreateUser.js";
import EditUser from "../UserCRUD/EditUser/EditUser.js";
import DeleteUser from "../UserCRUD/DeleteUser/DeleteUser.js";
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
                <Route path="/EditUser/:id" element={<EditUser/>} />
                <Route path="/DeleteUser/:id" element={<DeleteUser />} />

            </Routes>

        </BrowserRouter>

    );
}
export default AllRoutes;