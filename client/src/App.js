import React from "react";

// Set up all routes in App
import { Route, Link } from "react-router-dom";

// Using AppWrapper to set font and background for the app
import { AppWrapper, Row, Linkton, Button } from "bushido-strap";

// Importing all routes
// import PrivateRoute from "./views/PrivateRoute";
import Register from "./components/Register";
import Login from "./components/Login";
import Users from "./components/Users"

// Using Web Font Loader for google fonts
import WebFont from "webfontloader";

// setting our font variables
const h_font = "Comfortaa";
const r_font = "Montserrat";

// using WebFont to easily access Google fonts
WebFont.load({
  google: {
    families: [h_font, r_font]
  }
});

const App = () => {
  const logout = () => {
    localStorage.removeItem("token")
};
  
  return (
    <AppWrapper head_font={h_font} font={r_font} m="0 auto">
      {/* <Row justify="flex-end" bg="black" p="2rem"> */}
        <Linkton to="/">Home</Linkton>
        <Linkton to='/register'>Register</Linkton>
        <Linkton to='/login'>Login</Linkton>
        <Linkton to="/users">Users</Linkton>
        <Button onClick={logout}>Logout</Button>
      {/* </Row> */}
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/users" component={Users} />
    </AppWrapper>
  );
};

export default App;
