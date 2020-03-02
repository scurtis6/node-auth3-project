import React, { useState } from "react";

import { Wrapper, Form, Input, Button, Card, Box } from "bushido-strap";

import { useDispatch, connect } from "react-redux";
import { useHistory } from "react-router";

import { registerUser } from "../store/actions/registerUser";

function Register(props) {
  console.log(props);
  const [newAccount, setNewAccount] = useState({
    username: "",
    password: ""
  });

  const dispatch = useDispatch();
  const history = useHistory();

  // const handleCheckBox = (e) => {
  //   setNewAccount({
  //     ...newAccount,
  //     [e.target.name]: e.target.checked
  //   })
  // }

  const handleChange = e => {
    e.preventDefault();
    setNewAccount({...newAccount, [e.target.name] : e.target.value})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(newAccount));
    // history.push("/");
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Card p="4rem">
          <h2>Register here!</h2>
          <Box h="2rem" />
          <Input type="text" 
          placeholder="username"
          name="username"
          value={newAccount.username}
          onChange={handleChange} />
          <Box h="2rem" />
          <Input type="password" 
          placeholder="Password"
          name="password" 
          value={newAccount.password}
          onChange={handleChange} />
          <Button green type="submit" onClick={() => history.push("/users", newAccount)} stretch>
            Register
          </Button>
        </Card>
      </Form>
    </Wrapper>
  );
};

const mapStateToProps = state => {
  console.log(state.registerUser);
  return ({
    error: state.registerUser.error,
    loggingIn: state.registerUser.loggingIn,
    registerUser: state.registerUser
  })
};

export default connect(mapStateToProps, { registerUser })(Register)
