import { Redirect, Switch, Route } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";
// import { Layout } from "../_metronic/layout";
import BasePage from "./routing/BasePage";
import AuthPage from "./routing/AuthPage";


export function Routes() {
    const isAuthorized = false;
//   const { isAuthorized, showRegGeneralIntentPage, showRegYourOrgInfoPage, showRegEventInfo } = useSelector(({ auth }) => {
//     return {
//       isAuthorized: auth.authToken != null && auth.authToken != undefined,
//       showRegGeneralIntentPage: auth.askGeneralIntent,
//       showRegYourOrgInfoPage: auth.askGeneralIntent,
//       showRegEventInfo: auth.askGeneralIntent
//     }
//   },
//     shallowEqual
//   );
  return (
    <Switch>
      {(!isAuthorized) ? (
        <Route>
          <AuthPage />
        </Route>
      ) : (
          <BasePage />
      )}

    </Switch>
  );
}
