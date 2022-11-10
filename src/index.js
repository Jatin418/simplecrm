// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './Dashboard/Dashboard';
import Account from './Account/Account';
import AccRegister from './Account/AccRegister';
import MiniDrawer from './Layouts/Sidebar';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from "./theme"
import { styled, useTheme, alpha } from '@mui/material/styles';
import Edit from './Account/AccEdit';
import Details from './Account/AccDetails';
import SignUp from './Login&SignUp/SignUp';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


    <ThemeProvider theme={theme}>
        <CssBaseline>
            {/* <MiniDrawer/> */}
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Dashboard />} />
                    <Route path='/Account' element={<Account />} />
                    <Route path='/Accreg' element={<AccRegister />} />
                    <Route path='Account/edit/:id' element={<Edit/>} />
                    <Route path='Account/view/:id' element={<Details/>} />
                    <Route path="signup" element={<SignUp/>}/>
                </Routes>
            </BrowserRouter>

        </CssBaseline>
    </ThemeProvider>





);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
