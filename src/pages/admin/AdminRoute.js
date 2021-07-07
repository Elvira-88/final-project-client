import { Redirect, Route } from "react-router";
import { useAuthContext } from "../../context/AuthContext";

export default function AdminRoute({ children, ...rest }) {

    const { isAuthenticated } = useAuthContext();

    return (
        <Route {...rest} render={() => {
            return isAuthenticated && isAdmin()
                ? children
                : <Redirect exact to="/admin" />
        }} />
    )
}
