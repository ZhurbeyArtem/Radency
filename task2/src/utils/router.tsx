import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import MainPage from "../page/main";
import UpdatePage from "../page/update";
const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route key='/' path='/' element={<MainPage/>}/>
                <Route key='/update/:id' path='/update/:id' element={ <UpdatePage/>} />
                <Route
                    path = '*'
                    element={<Navigate to='/' />}
                />
            </Routes>


        </BrowserRouter>

    );
};

export default AppRouter;