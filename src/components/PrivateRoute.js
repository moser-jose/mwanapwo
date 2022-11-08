import React,{useContext} from "react"
import { Route,Navigate } from "react-router-dom"
import { AuthContext } from "../contexts/authContext";


export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useContext(AuthContext)
  return (
    <Route
      {...rest}
      render={props => {
        return currentUser ? <Component {...props} /> : <Navigate to="/"/>
      }}
    ></Route>
  )
}
