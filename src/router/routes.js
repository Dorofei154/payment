import { ROUTES } from "../constants/routes";
import { AuthComponent } from "../components/AuthComponent/AuthComponent";
import { RegistrationComponent } from "../components/RegistrationComponent/RegistrationComponent";
import { SubscriptionComponent } from "../components/SubscriptionComponent/SubscriptionComponent";

const { AUTH_ROUTE, REGISTRATION_ROUTE, SUBSCRIPTION_ROUTE } = ROUTES

export const routes = [
    {
        path: AUTH_ROUTE,
        Component: AuthComponent,
    },
    {
        path: REGISTRATION_ROUTE,
        Component: RegistrationComponent,
    },
    {
        path: SUBSCRIPTION_ROUTE,
        Component: SubscriptionComponent,
    },
]
