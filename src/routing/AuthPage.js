import React, { Suspense, lazy } from "react";
import { Redirect, Switch, Route, useLocation } from "react-router-dom";
import { ForgotPassword } from "../pages/ForgotPassword";
import { Login } from "../pages/Login";
import { Registration } from "../pages/Registration";
// import { Logout } from "./modules/Auth";

export default function AuthPage() {

    return (
        <Suspense fallback={null}>
            <Switch>
                <Route exact path="/" component={Registration} />
                <Route path="/login" component={Login} />
                <Route path="/forgot-password" component={ForgotPassword} />

            </Switch>
        </Suspense>
    );
}
