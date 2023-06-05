import React from 'react';
import {Route, Routes} from "react-router-dom";
import ProfilePage from "../../../m2-features/f2-profile/ProfilePage";
import LoginPage from "../../../m2-features/f1-auth/n1-login/LoginPage";
import RegistrationPage from "../../../m2-features/f1-auth/n2-registration/RegistrationPage";
import RecoveryPasswordPage from "../../../m2-features/f1-auth/n3-recovery-password/RecoveryPasswordPage";
import EnteringNewPasswordPage from "../../../m2-features/f1-auth/n4-entering-new-password/EnteringNewPasswordPage";
import NotFound from "../../../m2-features/f3-not-found/NotFound";
import TestPage from "../../../m2-features/f0-test/TestPage";

function Main() {
    return (
        <div>
            <Routes>
                <Route path={'/cards/test'} element={<TestPage/>}></Route>
                <Route path={'/cards'} element={<ProfilePage/>}></Route>
                <Route path={'/cards/login'} element={<LoginPage/>}></Route>
                <Route path={'/cards/registration'} element={<RegistrationPage/>}></Route>
                <Route path={'/cards/recovery-password'} element={<RecoveryPasswordPage/>}></Route>
                <Route path={'/cards/entering-new-password'} element={<EnteringNewPasswordPage/>}></Route>
                <Route path={'/*'} element={<NotFound/>}></Route>
            </Routes>
        </div>
    );
}

export default Main;