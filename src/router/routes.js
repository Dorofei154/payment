import { ROUTES } from "../constants/routes";
import { AuthComponent } from "../components/AuthComponent/AuthComponent";
import { LoginComponent } from "../components/LoginComponent/LoginComponent";
import { SubscriptionComponent } from "../components/SubscriptionComponent/SubscriptionComponent";

const { AUTH_ROUTE, LOGIN_ROUTE, SUBSCRIPTION_ROUTE } = ROUTES

export const routes = [
    {
        path: AUTH_ROUTE,
        Component: AuthComponent,
    },
    {
        path: LOGIN_ROUTE,
        Component: LoginComponent,
    },
    {
        path: SUBSCRIPTION_ROUTE,
        Component: SubscriptionComponent,
    },
]
