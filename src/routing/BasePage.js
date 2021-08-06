import React, { Suspense, lazy } from "react";
import { Redirect, Switch, Route, useLocation } from "react-router-dom";
import { Registration } from "../pages/Registration";
// import { Logout } from "./modules/Auth";


export default function BasePage() {

    return (
        <Suspense fallback={null}>
            <Switch>
                <Route path="/" component={Registration} />

            </Switch>
        </Suspense>
    );
}
