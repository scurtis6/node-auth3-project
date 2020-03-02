import React, { useState } from "react";

import {
  Wrapper,
  Form,
  Input,
  Button,
  Card,
  Box,
  theme,
  Col
} from "bushido-strap";

import { useDispatch, connect } from "react-redux";
import { useHistory } from "react-router";

import { authenticate } from "../../src/store/actions/auth";

function Login(props) {
  const [credentials, setCredientials] = useState({
    username: "",
    password: ""
  });
 
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = e => {
    e.preventDefault();
    setCredientials({...credentials, [e.target.name] : e.target.value})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authenticate(credentials));
    history.push("/users");
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Card p="4rem">
          {/* <Row stretch jc_evenly> */}
            <Box sqr="5rem" star bg={theme.red5} />
            <Box sqr="5rem" message bg={theme.blue5} />
          {/* </Row> */}
          <h2>Login here!</h2>
          <Box h="2rem" />
          <Input type="text"
          name="username" 
          placeholder="Username" 
          value={credentials.username} 
          onChange={handleChange} />
          <Box h="2rem" />
          <Input type="password" 
          placeholder="Password"
          name="password" 
          value={credentials.password}
          onChange={handleChange} />
          <Box h="2rem" />
          <Button green type="submit" stretch>
            Login
          </Button>
        </Card>
      </Form>
    </Wrapper>
  );
}
const mapStateToProps = state => {
  console.log(state.auth);
  return ({
    error: state.auth.error,
    loggingIn: state.auth.loggingIn
  })
}
export default connect(mapStateToProps, { authenticate })(Login)
