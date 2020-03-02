import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../../src/store/actions/users";
import { AppWrapper, Wrapper, Button, Card } from "bushido-strap";
import theme from "bushido-strap/styled/theme"
import { Link } from "react-router-dom";

function UsersList ({ fetchUsers, users, isFetching, error }) {

    useEffect(() => {
        fetchUsers()
    }, [fetchUsers]);


    const logout = () => {
        localStorage.removeItem("token")
    };

    if(isFetching){
        return <h2>Loading User List...</h2>
    };

    const picture = "https://disk.megaimg.net/7838817de33e60b4cb623f000dce1252";

    return (
       <AppWrapper bg_src={picture}>
            <Wrapper>
                <div>
                    <Card m="10rem 0 0 0" bg={theme.red0} color="darkred">
                <h1>Users List</h1>
                    <div>
                    {users.map(user => (
                        <div key={user.id} id={user.id}>
                            <p>Username: {user.username}</p>
                            <p>Department: {user.department}</p>
                            <br></br>
                            <Link to={`/users/${user.id}`}>
                                <div>View Profile</div>
                        </Link>
                        </div>
                    ))}
                    </div>
                    </Card>
                    {/* <Button onClick={logout} color="pink">Log Out</Button> */}
                </div>
            </Wrapper>
        </AppWrapper>
    );
};

const mapStateToProps = (state) => {
    console.log("user list", state.users.users)
    return({
        users: state.users.users,
        isFetching: state.users.isFetching,
        error: state.users.error
    });
};

export default connect(mapStateToProps, { fetchUsers })(UsersList);

